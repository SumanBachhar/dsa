const s = "race a car";
const isPalindrome = (s) => {
  let str = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  if (str.split("").reverse().join("") === str) {
    return true;
  } else {
    return false;
  }
};
console.log(isPalindrome(s));

// or
const st = "NAMAN";
const isPalindromee = (st) => {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    if (st[l] != st[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};
console.log(isPalindromee(st));
