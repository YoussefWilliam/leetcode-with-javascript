function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const s_hashmap = s
    .split("")
    .reduce((map, key) => map.set(key, (map.get(key) || 0) + 1), new Map());

  for (let i = 0; i < t.length; i++) {
    const tChar = t[i];
    if (!s_hashmap.get(tChar)) {
      return false;
    } else {
      s_hashmap.set(tChar, s_hashmap.get(tChar) - 1);
    }
  }
  return true;
}

module.exports = isAnagram;
