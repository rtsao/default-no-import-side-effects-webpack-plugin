// @flow

const DefaultSideEffectsPlugin = require("../../index.js");

module.exports = [
  {
    name: "conditional-pure-cjs-control",
    entry: "./conditional-pure-cjs.js",
    output: { filename: "conditional-pure-cjs-control.js" },
    mode: "development",
    optimization: { sideEffects: true }
  },
  {
    name: "conditional-pure-cjs-test",
    entry: "./conditional-pure-cjs.js",
    output: { filename: "conditional-pure-cjs-test.js" },
    mode: "development",
    optimization: { sideEffects: true },
    plugins: [new DefaultSideEffectsPlugin()]
  },
  {
    name: "conditional-pure-cjs-listed-test",
    entry: "./conditional-pure-cjs.js",
    output: { filename: "conditional-pure-cjs-listed-test.js" },
    mode: "development",
    optimization: { sideEffects: true },
    plugins: [new DefaultSideEffectsPlugin({ ignoredPackages: ["pure-cjs"] })]
  },
  {
    name: "conditional-pure-es-exports-control",
    entry: "./conditional-pure-es-exports.js",
    output: { filename: "conditional-pure-es-exports-control.js" },
    mode: "development",
    optimization: { sideEffects: true }
  },
  {
    name: "conditional-pure-es-exports-test",
    entry: "./conditional-pure-es-exports.js",
    output: { filename: "conditional-pure-es-exports-test.js" },
    mode: "development",
    optimization: { sideEffects: true },
    plugins: [new DefaultSideEffectsPlugin()]
  },
  {
    name: "conditional-nested-control",
    entry: "./conditional-nested.js",
    output: { filename: "conditional-nested-control.js" },
    mode: "development",
    optimization: { sideEffects: true }
  },
  {
    name: "conditional-nested-test",
    entry: "./conditional-nested.js",
    output: { filename: "conditional-nested-test.js" },
    mode: "development",
    optimization: { sideEffects: true },
    plugins: [new DefaultSideEffectsPlugin()]
  },
  {
    name: "conditional-nested-outside-test",
    entry: "./conditional-nested.js",
    output: { filename: "conditional-nested-outside-test.js" },
    mode: "development",
    optimization: { sideEffects: true },
    plugins: [
      new DefaultSideEffectsPlugin({ includeNonRootContextIssuers: true })
    ]
  },
  {
    name: "conditional-impure-test",
    entry: "./conditional-impure.js",
    output: { filename: "conditional-impure-test.js" },
    mode: "development",
    optimization: { sideEffects: true },
    plugins: [new DefaultSideEffectsPlugin()]
  },
  {
    name: "node-builtin-control",
    entry: "./node-builtin.js",
    output: { filename: "node-builtin-control.js" },
    mode: "development",
    optimization: { sideEffects: true }
  },
  {
    name: "node-builtin-test",
    entry: "./node-builtin.js",
    output: { filename: "node-builtin-test.js" },
    mode: "development",
    optimization: { sideEffects: true },
    plugins: [new DefaultSideEffectsPlugin()]
  },
  {
    name: "conditional-local-control",
    entry: "./conditional-local.js",
    output: { filename: "conditional-local-control.js" },
    mode: "development",
    optimization: { sideEffects: true }
  },
  {
    name: "conditional-local-test",
    entry: "./conditional-local.js",
    output: { filename: "conditional-local-test.js" },
    mode: "development",
    optimization: { sideEffects: true },
    plugins: [new DefaultSideEffectsPlugin()]
  },
  {
    name: "deep-test",
    entry: "./deep.js",
    output: { filename: "deep-test.js" },
    mode: "development",
    optimization: { sideEffects: true },
    plugins: [new DefaultSideEffectsPlugin()]
  }
];
