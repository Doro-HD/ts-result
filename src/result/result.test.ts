import { assertEquals } from "jsr:@std/assert";
import * as result from "./result.ts";

Deno.test("Should create ok object with correct data", () => {
  const expectation = { foo: "bar" };
  const ok = result.ok(expectation);

  assertEquals(ok.status, "ok");
});

Deno.test("Should return true for ok object", () => {
  const ok = result.ok({});

  assertEquals(result.isOk(ok), true);
});

Deno.test("Should return false for err object", () => {
  const ok = result.err({});

  assertEquals(result.isOk(ok), false);
});

Deno.test("Should create an err object", () => {
  const expectation = { foo: "bar" };
  const err = result.err(expectation);

  assertEquals(err.err, expectation);
});

Deno.test("Should return true for err object", () => {
  const err = result.err({});

  assertEquals(result.isErr(err), true);
});

Deno.test("Should return false for ok object", () => {
  const err = result.ok({});

  assertEquals(result.isErr(err), false);
});
