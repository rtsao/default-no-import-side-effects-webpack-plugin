import { hello, world } from "nested";

export function deep() {
  if (false) {
    console.log(hello());
  }
  console.log(world());
}
