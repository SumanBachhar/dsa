let s = "abcxyz";

const printAllSubstrings = (s) => {
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      console.log(s.substring(i, j + 1));
    }
  }
};
printAllSubstrings(s);
