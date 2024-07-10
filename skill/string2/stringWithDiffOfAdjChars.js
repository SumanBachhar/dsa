let string = "abcdDcba";
const stringWithDiffOfAdjChars = (string) => {
  let ans = "";
  ans += string[0];
  let i = 1;

  while (i < string.length) {
    let next = string.charCodeAt(i);
    let curr = ans.charCodeAt(ans.length - 1);
    let diff = next - curr;
    ans += diff;
    ans += string[i];
    i++;
  }
  return ans;
};
console.log(stringWithDiffOfAdjChars(string));
