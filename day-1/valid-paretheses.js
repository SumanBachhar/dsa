// const s = "()[]{}";
const s = "(]";

const isValid = (s) => {
  let obj = { "(": ")", "{": "}", "[": "]" };
  let stack = [];
  for (let char of s) {
    if (obj[char]) {
      stack.push(char);
    } else if (obj[stack.pop()] !== char) {
      console.log(false);
    } else {
      console.log(stack.length == 0);
    }
  }
};
isValid(s);
