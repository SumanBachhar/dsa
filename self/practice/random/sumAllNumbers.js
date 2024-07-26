const sumAllNumbers = (...numbers) => {
  let sum = 0;

  for (const number of numbers) {
    sum += number;
  }
  return sum;
};
const result = sumAllNumbers(1, 2, 3, 4, 5);
console.log(result);
