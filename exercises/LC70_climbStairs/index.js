/**
 *
 * @param {*} n
 * @param {*} memo
 * @returns a cached result
 */
const climbStair1 = (n, memo = {}) => {
  if (memo[n]) return memo[n];
  if (n <= 3) return n;
  memo[n] = climbStair1(n - 1, memo) + climbStair1(n - 2, memo);
  return memo[n];
};

/**
 * Normal flow by having an array of cache implemented within the function
 */

const climbStair2 = (n) => {
  if (n <= 3) return n;
  let ways = [0, 1, 2, 3];
  for (let i = 4; i <= n; i++) {
    ways.push(ways[i - 1] + ways[i - 2]);
  }
  return ways.pop();
};

module.exports = { climbStair1, climbStair2 };
