// Determine whether an integer is a palindrome. An integer is
// a palindrome when it reads the same backward as forward.
// Solve this WITHOUT converting the integer to a string.
// -------------------------------------------------------------
// function isPalindrome(121) --> true
// function isPalindrome(-121) --> false
// function isPalindrome(10) --> false

function isPalindrome(x) {
  const stringx = x.toString();
  const myString = x.toString().split("").reverse().join("");
  for (let i = 0; i < myString.length; i++) {
    if (stringx[i] !== myString[i]) return false;
  }
  return true;
}

module.exports = isPalindrome;
