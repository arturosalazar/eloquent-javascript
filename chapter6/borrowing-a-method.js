/*
  An object’s hasOwnProperty can be used as a more robust alternative to the
  in operator when you want to determine if an object has a property while still
  ignoring the prototype’s properties.
  But what if your map needs to include the word "hasOwnProperty"?
  You won’t be able to call that method anymore because the object’s
  own property hides the method value.

  Can you think of a way to call hasOwnProperty on an object that has
  its own property by that name?
*/

//We will call the method directly from the Object.prototype object using the
//call method which will allow us to set the object "map" as the "this" value
//for Object.prototype

let map = {
  one: true,
  two: true,
  hasOwnProperty: true
};

// Fix this call
console.log(Object.prototype.hasOwnProperty.call(map, 'one'));
// → true
