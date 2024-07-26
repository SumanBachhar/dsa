function printPattern(n) {
  for (let i = n - 1; i >= 0; i--) {
    let line = "";

    for (let j = n - 1; j > i; j--) {
      line += " "; // Print space
    }

    line += "*"; // Print star

    for (let j = 1; j < i * 2; j++) {
      line += " "; // Print space
    }

    if (i >= 1) {
      line += "*";
    }

    console.log(line);
  }
}

// Call the function with the desired value of n
printPattern(5);
