const isValid = (s) => {
  let stack = [];
  let pairMap = { "{": "}", "[": "]", "(": ")" };
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (pairMap[char]) {
      stack.push(char);
    } else if (pairMap[stack.pop()] !== char) {
      return false;
    }
  }
  return stack.length === 0;
};

module.exports = isValid;
