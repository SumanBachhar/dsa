// reverse a string using inbuild method
const string = "javascript";

const reverse = string.split("").reverse().join("");
console.log(reverse);

// reverse a string without method

let str = "React";
let reverseStr = "";

for (let i = str.length - 1; i >= 0; i--) {
  reverseStr += str[i];
}
console.log(reverseStr);
