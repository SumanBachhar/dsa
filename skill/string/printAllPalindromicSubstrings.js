const s = "NAMAN";
const isPalindrome = (s) => {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    if (s[l] != s[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};
console.log(isPalindrome(s));

const printAllPalindromicSubstrings = (s) => {
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      let sbst = s.substring(i, j + 1);
      if (isPalindrome(sbst)) {
        console.log(sbst);
      }
    }
  }
};
printAllPalindromicSubstrings(s);
