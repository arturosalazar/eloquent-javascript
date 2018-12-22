/*
  Write a program that creates a string that represents an 8×8 grid, using newline
  characters to separate lines. At each position of the grid there is either a space
  or a "#" character. The characters should form a chessboard.
*/

let lengthsize = 8;
let chessboard = '';

//for loop to keep track of number of lines
for (let i = 0; i < lengthsize; i++) {
  //determine if even or odd number line. 
  //Start row with a ' ' and alternate '#',' ','#'from there if an even numbered line
  if (i % 2 == 0) {
    for (let j = 0; j < lengthsize; j++) {
      if (j == 0) chessboard += ' ';
      else if (j % 2 == 0) chessboard += ' ';
      else chessboard += '#';
    }
    chessboard += '\n';
  } 
  //Start row with a '#' and alternate ' ','#',' ' from there if an odd numbered line
  else {
    for (let j = 0; j < lengthsize; j++) {
      if (j == 0) chessboard += '#';
      else if (j % 2 == 0) chessboard += '#';
      else chessboard += ' ';
    }
    chessboard += '\n';
  }
}
console.log(chessboard);
