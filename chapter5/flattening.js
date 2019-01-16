/*
  Use the reduce method in combination with the concat method to “flatten”
  an array of arrays into a single array that has all the elements of
  the original arrays.
*/

let arrays = [[1, 2, 3], [4, 5], [6]];
let reducer = (accumulator, currentValue) => {
  for (elements of currentValue) {
    accumulator.push(elements);
  }
  return accumulator;
}

arrays.reduce(reducer, [])

// → [1, 2, 3, 4, 5, 6]
