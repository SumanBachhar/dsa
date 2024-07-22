function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}

console.log(factorialize(5));

// const f = (n) => {
//   if (n === 0) {
//     return;
//   }
//   console.log(n);
//   f(n - 1);
//   console.log(n);

//   console.log(n * f(n - 1));
// };
// f(4);
