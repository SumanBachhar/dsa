function printPascalsTriangle(rows) {
  for (let i = 0; i < rows; i++) {
    let line = "";
    let temp = 1;

    // Print leading spaces
    for (let j = 1; j <= rows - i; j++) {
      line += " ";
    }

    // Print Pascal's triangle numbers
    for (let k = 0; k <= i; k++) {
      if (k == 0 || i == 0) {
        temp = 1;
      } else {
        temp = (temp * (i - k + 1)) / k;
      }
      line += temp + " ";
    }

    console.log(line.trim());
  }
}

printPascalsTriangle(5);
