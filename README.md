# default-no-import-side-effects-webpack-plugin

Webpack assumes all modules have import side effects unless otherwise specified via the `sideEffects` field in the corresponding `package.json`.

This plugin alters the default behavior so that if the corresponding `package.json` omits the `sideEffects` field, its files are assumed to be free of import side effects.

```js
const DefaultNoImportSideEffectsPlugin = require("default-no-import-side-effects-webpack-plugin");

new DefaultNoImportSideEffectsPlugin({
  // Specify any packages that should not be side effect free by default.
  ignoredPackages: ["some-effectful-pkg"] // default: []

  // This plugin only applies to modules imported via import statements
  // located in source code within the root compilation context directory.
  // To force defaulting even in import statements in files outside of the root
  // compilation context directory, set this property to true.
  includeNonRootContextIssuers: true // default: false

  // This plugin only applies to imported files that are located outside the
  // root compilation context directory.
  // To force defaulting even for files that located within the root
  // compilation context directory, set this property to true.
  includeRootContextResources: true // default: false
})
```

## Caveats

If a given module is imported from both outside _and_ inside the root context directory and it is labeled as side effect free by this plugin, both import statements will be treated as being free from side effects even if `includeNonRootContextIssuers: false`. While not necessarily desirable, this is emergent behavior from webpack implementation details and how it treats multiple imports to the same module.
