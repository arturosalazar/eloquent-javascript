/*
  Write a program to print all numbers from 1 to 100
  if a number is divisible by 3, print 'Fizz' instead of the number
  if a number is divisible by 5, print 'Buzz' instead of the number
  if a number is divisible by 3 and 5, print 'FizzBuzz'
*/

for (let i = 1; i < 101; i++) {
  if (i%15 == 0) console.log('FizzBuzz');
  else if (i%3 == 0) console.log('Fizz');
  else if (i%5 == 0) console.log('Buzz');
  else console.log(i);
}
