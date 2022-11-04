function lengthOfLIS(nums) {
  if (nums.length === 0) return 0;
  let cache = new Array(nums.length).fill(1);
  for (let j = 1; j < nums.length; j++) {
    for (let i = 0; i < j; i++) {
      if (nums[j] > nums[i]) {
        cache[j] = Math.max(cache[i] + 1, cache[j]);
      }
    }
  }
  cache.sort((a, b) => a - b);
  return cache[nums.length - 1];
}

module.exports = lengthOfLIS;
