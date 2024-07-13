// reverse a string using inbuild method
const string = "javascript is a scripting language";

const reverse = string.split("").reverse().join("");
console.log(reverse);

// reverse a string without method

// let str = "React is a javascript library";
// let reverseStr = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   reverseStr += str[i];
// }
// console.log(reverseStr);

// const str = ["i", "like", "this", "program", "very", "much"];
const str = ["h", "e", "l", "l", "o"];
const reverseString = (str) => {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i] + " ";
  }
  return reversedStr;
};
console.log(reverseString(str));

const arr = [1, 2, 3, 4, 5];

const revArr = (arr) => {
  let revArray = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    revArray += arr[i] + " ";
  }
  return revArray;
};
console.log(revArr(arr));

const s = ["h", "e", "l", "l", "o"];

const revStr = (s) => {
  for (let i = 0, j = s.length - 1; i < j; ) {
    [s[i], s[j]] = [s[j], s[i]];
    i++;
    j--;
  }
  return s;
};
console.log(revStr(s));
