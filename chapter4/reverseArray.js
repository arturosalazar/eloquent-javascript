/*
  Without using the built in reverse method for Arrays

  Write two functions, reverseArray  and reverseArrayInPlace. 
  The first, reverseArray, takes an array as argument
  and produces a new array that has the same elements in the inverse order. 
  
  The second, reverseArrayInPlace, does what the reverse method does: 
  it modifies the array given as argument by reversing its elements. 
  
  Thinking back to the notes about side effects and pure functions in the
  previous chapter, which variant do you expect to be useful in more situations?
  Which one runs faster?
*/

//create a new array that has the same elements in inverse order
function reverseArray (origArray) {
  let reversed = [];
  for (i = 0; i < origArray.length; i++){
    reversed.push(origArray[origArray.length - 1 - i]);
  }
  return reversed;
}
