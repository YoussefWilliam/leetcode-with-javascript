function canJump(nums) {
  const arrayLength = nums.length;
  let cache = new Array(arrayLength).fill(false);
  cache[0] = true;
  for (let j = 1; j < arrayLength; j++) {
    for (let i = 0; i < j; i++) {
      if (cache[i] && i + nums[i] >= j) {
        cache[j] = true;
        break;
      }
    }
  }
  return cache[arrayLength - 1];
}

module.exports = canJump;
