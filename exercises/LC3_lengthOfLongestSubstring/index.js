// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

function lengthOfLongestSubstring(s) {
  let leftPointer = 0;
  let rightPointer = 0;
  let max = 0;

  let hashSet = new Set();
  while (rightPointer < s.length) {
    if (!hashSet.has(s[rightPointer])) {
      hashSet.add(s[rightPointer]);
      rightPointer++;
      max = Math.max(hashSet.size, max);
    } else {
      hashSet.delete(s[leftPointer]);
      leftPointer++;
    }
  }
  return max;
}

module.exports = lengthOfLongestSubstring;
