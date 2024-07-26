let n = 5;
const printPattern = (n) => {
  for (let i = 1; i <= n; i++) {
    let str = "";

    for (let j = 0; j <= n; j++) {
      str += "*";
    }
    console.log(str);
  }
};
printPattern(n);
