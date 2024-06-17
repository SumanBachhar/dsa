const n = 44343244;
const d = 4;

const countDigit = (n, d) => {
  let count = 0;

  while (n > 0) {
    let currentDigit = n % 10;
    if (currentDigit === d) {
      count++;
    }
    n = Math.floor(n / 10);
  }

  return count;
};
console.log(countDigit(n, d));
