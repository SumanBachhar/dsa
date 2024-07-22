const s = "abcabcbb";
const lengthOfLongestSubstring = (s) => {
  if (s.length < 2) {
    return s.length;
  }
  const map = {};
  let front = 0,
    back = 0,
    maxLenth = 0;
  for (let front = 0; front < s.length; front++) {
    const exist = map[s[front]];
    if (exist !== undefined && exist >= back) {
      back = exist + 1;
    }
    map[s[front]] = front;
    maxLenth = Math.max(front - back + 1, maxLenth);
  }
  return maxLenth;
};
console.log(lengthOfLongestSubstring(s));
