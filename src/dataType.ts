const isequalFromLodash = require("lodash.isequal");

export function isEqual(a: any, b: any): boolean {
  return isequalFromLodash(a, b);
}

/**
 *
 * @param a
 * @param b
 *
 * it works for boolean, string
 */
export function strictEqual(a: any, b: any): boolean {
  return a === b;
}

export function isUndefined(a: any): boolean {
  return strictEqual(a, undefined);
}

export function isNull(a: any): boolean {
  return strictEqual(a, null);
}

export function isFalse(a: any): boolean {
  return strictEqual(a, false);
}

export function isEmptyString(a: any): boolean {
  return strictEqual(a, "");
}

export function isEmptyArray(a: any): boolean {
  return isEqual(a, []);
}

export function isEmptyObject(a: any): boolean {
  return isEqual(a, {});
}
