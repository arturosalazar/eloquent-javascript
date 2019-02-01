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
  constructor(input) {
    this.group = [];
  }

  //check if argument is a member of the group
  has(argument) {
    return (this.group.indexOf(argument) == -1) ? false : true;
  }

  //check if value is member of group. If so, skip. If not, push to the Group
  add(argument) {
    if (this.has(argument) == true) {
      return;
    } else {
      this.group.push(argument);
      return (this.group);
    }
  }

  //check if value is member of the group. If not, skip.
  //if so, find the value and delete it from the Group
  delete(argument) {
    if (this.has(argument) == false) {
      return;
    } else {
      //finds the index of the argument in array then uses that as
      //first arg for splice to delete
      this.group.splice(this.group.indexOf(argument), 1);
      return (this.group);
    }
  }

  //static - take iterable object as argument
  //create a group that contains all the values produced by iterating over it
  static from(iterableObj) {
    return new Group([...iterableObj]);
  }
}

//'tests' and the desired results
let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

/*
  TODO - I realized afterwards that this doesn't support an empty group (as in just let group1 = new Group;) 
  so I need to refactor this a bit so that works
*/
