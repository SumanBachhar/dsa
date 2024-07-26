let n = 5;
const printPattern = (n) => {
  let alphabet = 64;
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j < i + 1; j++) {
      str += String.fromCharCode(j + alphabet);
    }
    console.log(str);
  }
};
printPattern(n);
