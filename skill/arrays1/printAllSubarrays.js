const arr = [10, 20, 30, 40];
const n = arr.length;

const printAllSubArrays = (arr) => {
  for (let sp = 0; sp < n; sp++) {
    for (let ep = sp; ep < n; ep++) {
      let s = "";
      // s += sp;
      // print all
      for (let i = sp; i <= ep; i++) {
        s += arr[i] + " ";
      }
      console.log(s);
    }
  }
};
printAllSubArrays(arr);
