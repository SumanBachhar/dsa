let n = 5;
const printPattern = (n) => {
  let k = 1;
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j < i + 1; j++) {
      str += k++ + " ";
    }
    console.log(str);
  }
};
printPattern(n);
