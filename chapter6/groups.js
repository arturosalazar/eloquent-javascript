/*
  A set holds a collection of values but does not associate other values with
  those - just tracks which values are part of the set. A value can be part 
  of a set only once—adding it again doesn’t have any effect.
  
  Write a class called Group (since Set is already taken). 

  Like Set, it has add, delete, and has methods. 
  Its constructor creates an empty group, 
  add adds a value to the group (but only if it isn’t already a member), 
  delete removes its argument from the group (if it was a member), and 
  has returns a Boolean value indicating whether its argument is a member of 
  the group.
  Use the === operator, or something equivalent such as indexOf, to determine
  whether two values are the same.

  Give the class a static from method that takes an iterable object as argument
  and creates a group that contains all the values produced by iterating over it.
*/

//class group
class Group {
  
  //constructor - empty group (array?)
  constructor (input) {
      this.group =  [...input];
  }

  //check if argument is a member of the group
  has (argument) {
    let arr = this.group;
    return (arr.indexOf(argument) == -1) ? false : true;
  }

  //add - add value to the group ONLY if it isn't already a member
    //indexOf? to check if it's in the group. Or a for loop to iterate over
    //and check with ===

  //delete - find the value and delete it from the Group

  //static - take iterable object as agrument
    //create a group that contains all the values produced by iterating over it??
    //for of? to iterate?
}
