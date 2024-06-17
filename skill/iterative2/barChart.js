const arr = [6, 3, 5, 2, 1, 3, 7, 4, 1];

const getMax = (arr) => {
  let maxi = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (maxi < arr[i]) {
      maxi = arr[i];
    }
  }
  return maxi;
};
console.log(getMax(arr));

const printBarchart = (arr) => {
  let n = arr.length;
  let maxi = getMax(arr);

  for (let floor = maxi; floor >= 1; floor--) {
    let s = "";
    for (let i = 0; i < n; i++) {
      if (arr[i] >= floor) {
        s += "*";
      } else {
        s += " ";
      }
    }
    console.log(s);
  }
};

printBarchart(arr);
