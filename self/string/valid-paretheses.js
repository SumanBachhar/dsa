// const s = "()[]{}";
const s = "(]";

const isValid = (s) => {
  let obj = { "(": ")", "{": "}", "[": "]" };
  let stack = [];

  for (let char of s) {
    if (obj[char]) {
      stack.push(char);
    } else if (obj[stack.pop()] !== char) {
      return false;
    } else {
      return stack.length == 0;
    }
  }
};
console.log(isValid(s));
