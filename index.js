// @flow

/*::
type Opts = {|
  ignoredPackages?: Array<string>,
  applyOutsideRootContext?: boolean
|};
*/

module.exports = class DefaultSideEffectsPlugin {
  /*::
  ignoredPackages: Set<string>;
  applyOutsideRootContext: boolean;
  */
  constructor({
    ignoredPackages = [],
    applyOutsideRootContext = false
  } /*: Opts */ = {}) {
    this.ignoredPackages = new Set(ignoredPackages);
    this.applyOutsideRootContext = applyOutsideRootContext;
  }
  apply(compiler /*: any */) {
    const name = this.constructor.name;
    const { context } = compiler;
    compiler.hooks.normalModuleFactory.tap(name, normalModuleFactory => {
      normalModuleFactory.hooks.module.tap(name, (module, data) => {
        const resolveData = data.resourceResolveData;
        if (
          resolveData &&
          resolveData.descriptionFileData &&
          resolveData.descriptionFileData.sideEffects === void 0 &&
          (this.applyOutsideRootContext ||
            (resolveData.context.issuer &&
              resolveData.context.issuer.startsWith(context))) &&
          !this.ignoredPackages.has(resolveData.descriptionFileData.name)
        ) {
          module.factoryMeta.sideEffectFree = true;
        }
      });
    });
  }
};
