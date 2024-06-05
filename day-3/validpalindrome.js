const s = "race a car";
const isPalindrome = (s) => {
  let str = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  if (str.split("").reverse().join("") === str) {
    console.log(true);
  } else {
    console.log(false);
  }
};
isPalindrome(s);
