let n = 10;
const fibonacci = (n) => {
  let a = 0,
    b = 1;

  if (n > 1) {
    for (let i = 2; i < n; i++) {
      let temp = a + b;
      console.log(temp);
      a = b;
      b = temp;
    }
  }
};
fibonacci(n);
