const prices = [7, 1, 5, 3, 6, 4];

const buyAndSell = (prices) => {
  let buyPrice = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (buyPrice > prices[i]) {
      buyPrice = prices[i];
    }
    profit = Math.max(profit, prices[i] - buyPrice);
  }
  return profit;
};
console.log(buyAndSell(prices));
