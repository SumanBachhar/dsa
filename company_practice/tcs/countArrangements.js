const n = 5;
const factorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};
console.log(factorial(n));

const countArrangements = (n) => {
  if (n < 2) {
    return 0;
  }
  let arrengement = factorial(n - 2);
  arrengement *= 2;
  return arrengement;
};
console.log(countArrangements(n));
