function rob(nums) {
  const arrayLength = nums.length;
  if (arrayLength === 0) return 0;
  if (arrayLength === 1) return nums[0];
  if (arrayLength === 2) return Math.max(nums[0], nums[1]);

  let cache = [];
  cache[0] = nums[0];
  cache[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < arrayLength; i++) {
    const adj = nums[i] + cache[i - 2];
    cache[i] = Math.max(adj, cache[i - 1]);
  }
  return cache.pop();
}

module.exports = rob;
