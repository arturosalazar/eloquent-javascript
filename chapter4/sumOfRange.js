/*
  Write a range function that takes two arguments, start and end, and returns
  an array containing all the numbers from start up to (and including) end.

  Next, write a sum function that takes an array of numbers and returns the
  sum of these numbers. Run the example program and see whether it does
  indeed return 55.
*/

function range (start, finish){
  let rangeArray = [];
  for (i = start; i <= finish; i++){
    rangeArray.push(i);
  }
  return rangeArray;
}

function sum (array){
  let sum = 0;
  for (let i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum;
}

console.log(sum(range(1,10)));
