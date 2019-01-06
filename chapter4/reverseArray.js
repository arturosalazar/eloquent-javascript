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

//reverse the modify the original array 
function reverseArrayInPlace (origArray) {
  for (i = 0; i < origArray.length/2; i++){
    //create a variable to hold what is currently in our working space
    let hold = origArray[i];
    //get the value in the opposite space and place it in the working space
    origArray[i] = origArray[origArray.length-1-i];
    //place the held value in the opposite space  
    origArray[origArray.length-1-i] = hold;
  }
  return origArray;
}
