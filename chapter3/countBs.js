/*
  Write a function countBs that takes a string as its only argument and returns
  a number that indicates how many uppercase “B” characters there are in the string.
*/

function countBs (string) {
  let count = 0;
  for (let i = 0; i<string.length; i++){
    if (string[i] == 'B') count++;
  }
  return count;
}
