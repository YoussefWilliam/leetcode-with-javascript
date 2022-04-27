/* 
1. Sanitize the input string and remove all the non alphanumeric characters.
2. Create a left and right pointers, initially at the start till the end of the string.
3. While left is less than right:
    If left does not match right => return false
    else => return true

You end up with:
 - Time complexity is O(n) => since you iterated each character in the string.
 - Space Complexity is O(1) => because left and right pointers take up constant space.
*/

function isPalindrome(s) {
  s = s.toLowerCase().replace(/[\W_]/g, "");
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}

module.exports = isPalindrome;
