const s = "()[]{}";
// const s = "(]";

var isValid = function (s) {
  let map = { "(": ")", "[": "]", "{": "}" };
  let stack = [];
  for (let ch of s) {
    if (map[ch]) {
      stack.push(map[ch]);
    } else if (stack.length > 0 && stack[stack.length - 1] == ch) {
      stack.pop();
    } else console.log(false);
  }
  console.log(stack.length == 0);
};
isValid(s);
