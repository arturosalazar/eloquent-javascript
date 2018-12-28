/* 
  Here’s a way to define whether a positive whole number is even or odd:
  • Zero is even.
  • One is odd.
  • For any other number N, its evenness is the same as N - 2.
  Define a recursive function isEven corresponding to this description. The
  function should accept a single parameter (a positive, whole number) and return
  a Boolean.
*/

function isEven(number){
  if (number == 0) return true;
  else if (number == 1) return false;
  else if (number < 0) return "Negative Number, provide a positive number"
  else return isEven(number-2);
}
