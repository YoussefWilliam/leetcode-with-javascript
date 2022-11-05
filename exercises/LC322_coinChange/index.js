function coinChange(coins, amount) {
  if (coins.length <= 1 && coins[0] != amount) return -1;
  let cache = new Array(coins.length).fill(0);
  coins.sort((a, b) => a - b);
  let num = amount;
  let i = coins.length - 1;
  while (i >= 0 && num >= 0) {
    if (num - coins[i] >= 0) {
      num = num - coins[i];
      cache[i] = cache[i] + 1;
    } else {
      i--;
    }
  }
  return cache.reduce((acc, elem) => acc + elem);
}

module.exports = coinChange;
