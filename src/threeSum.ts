export function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) {
    return [];
  }
  let result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i; j < nums.length - 1; j++) {
      for (let k = 2; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          result.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  return result;
}
