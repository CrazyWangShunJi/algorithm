const nums = [2,7,9,3,1]
function rob(nums: number[]): number {
  // 对于数组nums, 其在索引i处，获得的最大收益max[i]有两种情况：
  // max[i] = max[i - 1], 即小偷偷到i - 1处就不偷了
  // 或者 max[i] = max[i - 2] + nums[i]

  let max0 = nums[0] // 索引为0时的最大收益
  if (nums.length === 1) {
      return max0
  }
  let max1 = Math.max(nums[0], nums[1]) // 索引为1时的最大收益
  if (nums.length === 2) {
      return max1
  }

  let max = max1
  for (let i = 2; i < nums.length; i++) {
    max = Math.max(max1, max0 + nums[i])
    max0 = max1
    max1 = max
    console.log('max', max)
  }
  return max
};
rob(nums)