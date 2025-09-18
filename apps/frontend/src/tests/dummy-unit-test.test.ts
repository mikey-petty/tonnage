import { expect, test } from "vitest";
import { sum } from "../dummy-function/sum";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("Undefined throws error", () => {
  expect(() => sum(undefined as unknown as number, 2)).toThrowError();
});
