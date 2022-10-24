function groupAnagrams(strs) {
  let grouped = {};

  for (let i = 0; i < strs.length; i++) {
    let word = strs[i];
    let key = word.split("").sort().join("");
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(word);
  }
  return Object.values(grouped);
}

module.exports = groupAnagrams;
