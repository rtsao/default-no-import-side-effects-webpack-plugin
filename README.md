# default-side-effects-webpack-plugin

```js
const DefaultSideEffectsPlugin = require("default-side-effects-webpack-plugin");

new DefaultSideEffectsPlugin({
  // This plugin only applies to modules imported from
  // source code within the root compilation context directory.
  // To force defaulting everywhere, set to true.
  applyOutsideRootContext: true // default: false

  // Specify any packages that should not be side effect free by default.
  ignoredPackages: ["some-effectful-pkg"] // default: []
})
```
