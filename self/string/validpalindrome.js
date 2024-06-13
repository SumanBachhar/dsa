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
