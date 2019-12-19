const assert = require("assert");
const fs = require("fs");

{
  const file = fs.readFileSync("./dist/conditional-pure-cjs-control.js");
  assert.equal(file.includes("foo"), true, "control bundle includes foo");
}
{
  const file = fs.readFileSync("./dist/conditional-pure-cjs-test.js");
  assert.equal(file.includes("foo"), false, "test bundle excludes foo");
}
{
  const file = fs.readFileSync("./dist/conditional-pure-cjs-listed-test.js");
  assert.equal(file.includes("foo"), true, "test ignored bundle includes foo");
}
{
  const file = fs.readFileSync("./dist/conditional-nested-control.js");
  assert.equal(file.includes("foo"), true, "control bundle includes foo");
}
{
  const file = fs.readFileSync("./dist/conditional-pure-es-exports-test.js");
  assert.equal(file.includes("foo"), false, "test bundle excludes foo");
}
{
  const file = fs.readFileSync("./dist/conditional-nested-control.js");
  assert.equal(file.includes("hello"), true, "control bundle includes hello");
  assert.equal(file.includes("foo"), true, "control bundle includes foo");
  assert.equal(file.includes("bar"), true, "control bundle includes bar");
}
{
  const file = fs.readFileSync("./dist/conditional-nested-test.js");
  assert.equal(file.includes("hello"), false, "test bundle excludes hello");
  assert.equal(file.includes("foo"), true, "test bundle includes foo");
  assert.equal(file.includes("bar"), true, "test bundle includes bar");
}
{
  const file = fs.readFileSync("./dist/conditional-nested-outside-test.js");
  assert.equal(file.includes("hello"), false, "test bundle excludes hello");
  assert.equal(file.includes("foo"), false, "test bundle excludes foo");
  assert.equal(file.includes("bar"), false, "test bundle excludes bar");
}
{
  const file = fs.readFileSync("./dist/conditional-impure-test.js");
  assert.equal(file.includes("foo"), true, "test bundle includes foo");
}
{
  const file = fs.readFileSync("./dist/node-builtin-control.js");
  assert.equal(
    file.includes("querystring"),
    true,
    "control bundle includes qs"
  );
}
{
  const file = fs.readFileSync("./dist/node-builtin-test.js");
  assert.equal(file.includes("querystring"), false, "test bundle excludes qs");
}
{
  const file = fs.readFileSync("./dist/conditional-local-control.js");
  assert.equal(
    file.includes("some_console_log"),
    true,
    "control bundle includes log"
  );
}
{
  const file = fs.readFileSync("./dist/conditional-local-test.js");
  assert.equal(
    file.includes("some_console_log"),
    true,
    "test bundle includes log"
  );
}
{
  const file = fs.readFileSync("./dist/deep-test.js");
  assert.equal(file.includes("world"), true, "test bundle includes world");
  // Ideally, this bundle should *include* foo, but because of how webpack
  // handles multiple imports to the same module it does not.
  // foo should not be pruned from "nested", but it is because foo is imported
  // in deep.js and thus marked as side effect free.
  assert.equal(file.includes("foo"), false, "test bundle excludes foo");
}
console.log("✅ Tests passed");
