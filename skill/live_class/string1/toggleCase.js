const s = "aAbrCDeF";

const toggleCase = (s) => {
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    let ascii = s.charCodeAt(i);
    console.log(ascii);
    if (ascii >= 97) {
      ascii -= 32;
    } else {
      ascii += 32;
    }
    let newChar = String.fromCharCode(ascii);
    console.log(newChar);
    ans += newChar;
  }
  return ans;
};
console.log(toggleCase(s));
