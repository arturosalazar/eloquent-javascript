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
  if (value1 === null || value2 === null) {
    return false;
  }

  //deep comparison
  else if (typeof(value1) === "object" && typeof(value2) === "object") {
    //check that the objects have the same number of properties
    value1Array = Object.keys(value1);
    value2Array = Object.keys(value2);
    if (value1Array.length != value2Array.length) return false;

    //for loop to deep check each property
    for (i = 0; i < value1Array.length; i++){
      if (value1[value1Array[i]] !== value2[value2Array[i]]) return false
    }
    return true
  }
  else {
    return value1 === value2;
  }
}
