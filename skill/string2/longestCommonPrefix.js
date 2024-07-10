const s = ["flower", "flow", "flight"];

const longestCommonPrefix = (s) => {
  let ans = "";

  for (let i = 0; i < s[0].length; i++) {
    let c = s[0][i];
    for (let j = 1; j < s.length; j++) {
      if (s[j].length == i || s[j][i] != c) {
        return ans;
      }
    }
    ans += c;
  }
  return ans;
};
console.log(longestCommonPrefix(s));
