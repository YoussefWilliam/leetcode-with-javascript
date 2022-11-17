// Given a 32-bit signed integer, reverse digits of an integer.
// For an int overflow, your code should just return 0.
// -------------------------
// reverse(123) --> 321
// reverse(120) --> 21
// reverse(-123) --> -321
// reverse(2147483649) --> 0
// reverse(-2147483649) --> 0

function reverse(x) {
  const reversedAnswer = parseInt(
    Math.abs(x).toString().split("").reverse().join("")
  );
  if (reversedAnswer > 0x7fffffff) return 0;
  return x < 0 ? -reversedAnswer : reversedAnswer;
}

module.exports = reverse;
