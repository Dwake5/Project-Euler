// https://projecteuler.net/problem=6
// The sum of the squares of the first ten natural numbers is,
// 1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)^2 = 55^2 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

// As per usual I have solved this generally, so you can enter any number and have it calcuated for you.
// The answer to the specific question with 20 is: 44100 - 2870 = 41230

const differenceBetweenSquareAndSum = (number) => {
  let square = 0
  for (i=1; i <= number; i++){
    square += i**2
  }
  let sumSquare = ((number/2)*(number+1))**2
  
  return sumSquare - square
} 
