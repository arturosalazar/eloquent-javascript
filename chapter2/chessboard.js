/*
  Write a program that creates a string that represents an 8×8 grid, using newline
  characters to separate lines. At each position of the grid there is either a space
  or a "#" character. The characters should form a chessboard.
*/

let size = 8;
let chessboard = '';
for (let i = 0; i < size*size-size; i++) {
  if (i == 0) {
    chessboard = chessboard + ' ';
  }
  else if (i%(size-1) == 0 && i%((size-1)*2) == 0) {
    chessboard = chessboard + ' ' + '\n' + ' ';
  }
  else if (i%(size-1) == 0) {
    chessboard = chessboard + '#' + '\n' + '#';
  }
  else if (i%2 == 0) chessboard = chessboard + ' ';
  else chessboard = chessboard + '#';
}
console.log(chessboard);
