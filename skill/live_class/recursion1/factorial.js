// this is recursively
function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}

console.log(factorialize(4));

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

// this i recursion
const factorial = (n) => {
  let total = 1;
  for (let i = n; i > 0; i--) {
    total *= i;
  }
  return total;
};
console.log(factorial(4));
