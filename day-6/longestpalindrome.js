const s = "abccccdd";
const longestPalindrome = (s) => {
  let ans = 0;
  let keys = {};

  for (let char of s) {
    keys[char] = (keys[char] || 0) + 1;
    if (keys[char] % 2 == 0) ans += 2;
  }
  console.log(s.length > ans ? ans + 1 : ans);
};
longestPalindrome(s);
