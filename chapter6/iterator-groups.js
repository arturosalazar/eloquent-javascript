/*
  Make the Group class from the previous exercise (groups.js) iterable. Refer to the
  section about the iterator interface earlier in the chapter if you aren’t
  clear on the exact form of the interface anymore.

  If you used an array to represent the group’s members, don’t just return
  the iterator created by calling the Symbol.iterator method on the array.
  That would work, but it defeats the purpose of this exercise.

  It is okay if your iterator behaves strangely when the group is
  modified during iteration.
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
    if (!this.has(argument)) this.group.push(argument);
  }

  //check if value is member of the group.
  //if so, find the value and delete it from the Group
  delete(argument) {
    if (this.has(argument) == true) {
      //finds the index of the argument in array then uses that as
      //first arg for splice to delete
      this.group.splice(this.group.indexOf(argument), 1);
    }
  }

  //static - take iterable object as agrument
  //create an instance of the group - iterate over the argument and call add
  //method for every element to add it to the new instance. Then return instance
  static from(iterableObj) {
      let newGroup = new Group()
      for (let elements of iterableObj) {
        newGroup.add(elements);
      }
      return newGroup;
    }
    //set the iterator value with [Symbol.iterator]
    [Symbol.iterator]() {
      //we need to set the starting values we'll use in the return val
      let iteratorVariable = 0;
      let lengthOfSet = this.group.length;
      let setArray = this.group;
      //We return the next() function which will then return the appropriate
      //object (including one with done:true when we're out of elements)
      return {
        next() {
          if (iteratorVariable == lengthOfSet) return {
            done: true
          }
          let value = setArray[iteratorVariable];
          iteratorVariable++
          return {
            value: value,
            done: false
          }
        }
      }
    }
}

//'tests' and the desired results
for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c


/*
  Debrief: My implementation differs from the Eloquent JS solution in that my
  solution doesn't involve calling an interation of a whole other class.
  the Eloquent JS has you return a new class iteration (object) of an interator
  class that has a next() function on prototype.

  I simply created a function which sets several variables and then returns an
  object that has a next() function on it

  Either way, the next() functions are essentially equivalent
*/
