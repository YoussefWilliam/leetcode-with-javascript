const containsDuplicate = (nums) => {
  const uniqueNums = new Set(nums);
  return nums.length !== uniqueNums.size;
};

module.exports = containsDuplicate;
