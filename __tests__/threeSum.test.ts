import { threeSum } from "@src/index";

describe("test threeSum", () => {
  it("[1, 2, 3] should return false", () => {
    const input = [1, 2, 3];
    expect(threeSum(input)).toBeFalsy();
  });
  it("[1, 2] should return false", () => {
    const input = [1, 2, 3];
    expect(threeSum(input)).toBeFalsy();
  });
  it("[1, 2, -1, 0] should return [1, -1, 0]", () => {
    const input = [1, 2, -1, 0];
    expect(threeSum(input)).toEqual([1, -1, 0]);
  });
});
