/*
  Write a function called countChar that takes a string and a character as it's arguments
  and returns the number of characters in the string.
*/

function countChar (string, char) {
  let count = 0;
  for (let i = 0; i<string.length; i++){
    if (string[i] == char) count++;
  }
  return count;
}
