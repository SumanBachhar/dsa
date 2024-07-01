const s = "aaabbccccdeeffaa";
const stringCompression = (s) => {
  let i = 0;
  let ans = "";

  while (i < s.length) {
    let j = i;
    let count = 0;

    while (j < s.length && s[i] == s[j]) {
      j++;
      count++;
    }
    ans += s[i];
    if (count > 1) {
      ans += count;
    }
    i = j;
  }
  return ans;
};
console.log(stringCompression(s));
