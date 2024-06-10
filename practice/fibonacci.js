const fibonacciSeries = (length) => {
  const fibArray = [0, 1];

  for (let i = 2; i < length; i++) {
    fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
  }
  return fibArray;
};
const series = fibonacciSeries(10);
console.log(series);
