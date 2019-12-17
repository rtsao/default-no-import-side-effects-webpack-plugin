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

console.log("✅ Tests passed");
