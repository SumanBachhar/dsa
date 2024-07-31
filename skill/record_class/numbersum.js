// const n = 5;
// const numberSum = (n) => {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// };
// console.log(numberSum(n));

function productOfEvenNumbers(N) {
  if (N < 2) {
    console.log("There are no even numbers in the given range.");
    return;
  }

  let product = 1;
  for (let i = 2; i <= N; i += 2) {
    product *= i;
  }

  console.log("The product of even numbers from 1 to " + N + " is: " + product);
}

// Example usage
let N = parseInt(prompt("Enter the value of N: "));
productOfEvenNumbers(N);
