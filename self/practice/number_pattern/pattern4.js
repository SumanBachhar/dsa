let n = 5;
const printPattern = (n) => {
  let alphabet = 64;
  for (let i = n; i >= 1; i--) {
    let str = "";
    for (let j = 1; j < i + 1; j++) {
      str += String.fromCharCode(j + alphabet);
    }
    console.log(str);
  }
};
printPattern(n);
