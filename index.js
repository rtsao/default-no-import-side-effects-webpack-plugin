// @flow

/*::
type Opts = {|
  ignoredPackages?: Array<string>,
  includeNonRootContextIssuers?: boolean,
  includeRootContextResources?: boolean,
|};
*/

module.exports = class DefaultNoImportSideEffectsPlugin {
  /*::
  ignoredPackages: Set<string>;
  includeNonRootContextIssuers: boolean;
  includeRootContextResources: boolean;
  */
  constructor({
    ignoredPackages = [],
    includeNonRootContextIssuers = false,
    includeRootContextResources = false
  } /*: Opts */ = {}) {
    this.ignoredPackages = new Set(ignoredPackages);
    this.includeNonRootContextIssuers = includeNonRootContextIssuers;
    this.includeRootContextResources = includeRootContextResources;
  }
  apply(compiler /*: any */) {
    const name = this.constructor.name;
    const { context } = compiler;
    compiler.hooks.normalModuleFactory.tap(name, normalModuleFactory => {
      normalModuleFactory.hooks.module.tap(name, (module, data) => {
        const resolveData = data.resourceResolveData;

        // Note: depending on import order, resolveData.context.issuer is not
        // guaranteed to be the exact file containing the import statement.
        // Instead, it may be a prior file that imported the same resource.

        // So we use data.context which seems to be reliably the parent
        // directory of the file containing the import.

        if (
          resolveData &&
          resolveData.descriptionFileData &&
          resolveData.descriptionFileData.sideEffects === void 0 &&
          (this.includeNonRootContextIssuers ||
            data.context.startsWith(context)) &&
          (this.includeRootContextResources ||
            !data.resource.startsWith(context)) &&
          !this.ignoredPackages.has(resolveData.descriptionFileData.name)
        ) {
          module.factoryMeta.sideEffectFree = true;
        }
      });
    });
  }
};
