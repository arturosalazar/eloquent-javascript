/*
  Analogous to the some method, arrays also have an every method.
  This one returns true when the given function returns true for every
  element in the array.

  Implement every as a function that takes an array and a predicate function
  as parameters.

  Write two versions, one using a loop and one using the some method.

  function every(array, test) {
  // Your code here.
  }

  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true
*/

function every(array, test) {
    for (elements of array) {
      if (test(elements) == false) return false;
    }
    return true
}


// use some() method
function every2(array, test) {
  return !array.some(element => !test(element));
}
