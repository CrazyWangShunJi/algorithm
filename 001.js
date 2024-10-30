var nums1 = [2, 7, 9, 3, 1];
function rob1(nums) {
    // 对于数组nums, 其在索引i处，获得的最大收益max[i]有两种情况：
    // max[i] = max[i - 1], 即小偷偷到i - 1处就不偷了
    // 或者 max[i] = max[i - 2] + nums[i - 2]
    var max0 = nums[0]; // 索引为0时的最大收益
    if (nums.length === 0) {
        return max0;
    }
    var max1 = Math.max(nums[0], nums[1]); // 索引为1时的最大收益
    if (nums.length === 0) {
        return max1;
    }
    var max = max1;
    for (var i = 2; i < nums.length; i++) {
        console.log('max', max);
        console.log('max0', max0);
        console.log('max1', max1);
        max = Math.max(max1, max0 + nums[i - 2]);
        max0 = max1;
        max1 = max;
    }
    return max;
}
;
rob1(nums1);
