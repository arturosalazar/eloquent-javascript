/*
Write a function deepEqual that takes two values and returns true only if
they are the same value or are objects with the same properties, where the
values of the properties are equal when compared with a recursive call to
deepEqual.

To find out whether values should be compared directly
(use the === operator for that) or have their properties compared,
you can use the typeof operator.

If it produces "object" for both values, you should do a deep comparison.
But you have to take one silly exception into account:
because of a historical accident, typeof null also produces "object".

The Object.keys function will be useful when you need to go over the
properties of objects to compare them.
*/

function deepEqual (value1,value2) {
  //check if we are dealing with null values before checking if we're dealing with objects
  if (value1 === null || value2 === null) {
    return value1 === value2;
  }
  
  //if both values are objects, run function to compare objects and return the result
  else if (typeof(value1) === "object" && typeof(value2) === "object") {
    return deepComparison(value1,value2);
  }
  
  //in all other cases, simply perform strict comparison
  else {
    return value1 === value2;
  }
}

//function will check if two objects are the same
function deepComparison (value1,value2){
  
  //check that the objects have the same number of properties
  value1Array = Object.keys(value1);
  value2Array = Object.keys(value2);
  if (value1Array.length != value2Array.length) return false;

  //for loop to deep check each property
  for (i = 0; i < value1Array.length; i++){
    if (typeof(value1[value1Array[i]]) === "object" && typeof(value2[value2Array[i]]) === "object") {
      if (deepComparison(value1[value1Array[i]],value2[value2Array[i]])) continue;
      else return false;
    }
    else if(value1[value1Array[i]] !== value2[value2Array[i]]) return false;
  }
  return true
}
