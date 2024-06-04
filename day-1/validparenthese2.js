const s = "()[]{}";
// const s = "(]";

var isValid = function (s) {
  let map = { "(": ")", "[": "]", "{": "}" };
  let stack = [];
  for (let ch of s) {
    if (map[ch]) {
      //pushing opening bracket first
      stack.push(map[ch]);
    } else if (stack.length > 0 && stack[stack.length - 1] == ch) {
      //if we have a matching closing bracket to the one we pushed earlier, we simply pop it.
      stack.pop();
    } else console.log(false);
  }
  //if at last all values are poped i.e stack is empty, we have valid set of parentheses.
  console.log(stack.length == 0);
};
isValid(s);
