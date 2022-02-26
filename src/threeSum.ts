export function threeSum(nums: number[]): number[][] | false {
  if (nums.length < 3) {
    return false;
  }
  let result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = 1; j < nums.length - 1; j++) {
      for (let k = 2; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          result.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }

  return result.length > 0 ? result : false;
}
