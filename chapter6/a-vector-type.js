/*
  Write a class Vec that represents a vector in two-dimensional space. It takes
  x and y parameters (numbers), which it should save to properties of the same
  name.
  Give the Vec prototype two methods, plus and minus, that take another
  vector as a parameter and return a new vector that has the sum or difference
  of the two vectors’ (this and the parameter) x and y values.
  Add a getter property length to the prototype that computes the length of
  the vector—that is, the distance of the point (x, y) from the origin (0, 0).
*/

//Create a class called Vec
class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  //take another vector obj as input - return a new vector with sum
  //of the vectors' x and y values
  plus(vecObject) {
    return new Vec((this.x + vecObject.x), (this.y + vecObject.y));
  }

  //take another vector obj as input - return a new vector with difference
  //of the vectors' x and y values
  minus(vecObject) {
    return new Vec((this.x - vecObject.x), (this.y - vecObject.y));
  }

  //create a getter to give distance between vector and 0,0
  get length() {
    return Math.sqrt(Math.pow(0 - this.x, 2) + Math.pow(0 - this.y, 2))
  }
}

//'tests' and the desired results
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5
