import { assertEquals } from "@std/assert";
import * as option from "./option.ts";

Deno.test("Should create a some type object", () => {
  const expectation = { email: "foo" };
  const someOption = option.some(expectation);

  assertEquals(someOption, { status: "some", data: expectation });
});

Deno.test("Should create a none type object", () => {
  const noneOption = option.none();

  assertEquals(noneOption, { status: "none" });
});

Deno.test("Should create a some type object using from", () => {
  const expectation = { email: "foo" };
  const someOption = option.from(expectation);

  assertEquals(someOption, { status: "some", data: expectation });
});

Deno.test("Should create a none type object from null using from", () => {
  const noneOption = option.from(null);

  assertEquals(noneOption, { status: "none" });
});

Deno.test("Should create a none type object from undefined using from", () => {
  const noneOption = option.from(undefined);

  assertEquals(noneOption, { status: "none" });
});

Deno.test("Should create a none type object from nullish using from", () => {
  const noneOption = option.from(0);

  assertEquals(noneOption, { status: "some", data: 0 });
});
