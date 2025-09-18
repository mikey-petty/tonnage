export function sum(a: number, b: number): number {
  if (typeof a !== "number")
    throw new TypeError(`Expected 'a' to be a number, got ${typeof a}`);
  if (typeof b !== "number")
    throw new TypeError(`Expected 'b' to be a number, got ${typeof b}`);
  return a + b;
}
