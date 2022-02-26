import { threeSum } from "../src/index";

import * as mocha from "mocha";
import * as chai from "chai";

const expect = chai.expect;
describe("test threeSum", () => {
  it("[1, 2, 3] should return false", () => {
    const input = [1, 2, 3];
    expect(threeSum(input)).to.be.false;
  });
  it("[1, 2] should return false", () => {
    const input = [1, 2, 3];
    expect(threeSum(input)).to.be.false;
  });
  it("[1, 2, -1, 0] should return [1, -1, 0]", () => {
    const input = [1, 2, -1, 0];
    expect(threeSum(input)).to.equal([1, -1, 0]);
  });
});
