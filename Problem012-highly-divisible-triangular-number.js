// https://projecteuler.net/problem=12
// The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:
// 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
// Let us list the factors of the first seven triangle numbers:
//  1: 1
//  3: 1,3
//  6: 1,2,3,6
// 10: 1,2,5,10
// 15: 1,3,5,15
// 21: 1,3,7,21
// 28: 1,2,4,7,14,28
// We can see that 28 is the first triangle number to have over five divisors.
// What is the value of the first triangle number to have over five hundred divisors?

// The xth triangle number is the the sum of the first x numbers, which has a simple formula
const xthTriangle = number => (number)*(number+1)/2

// Finds how many fators a number has.
// Iterates up to the sqrt of a number, it decreases what it needs to search up to
// Each time it finds a pair. For example when it finds 5 as a factor in 100, it will stop searching after 20.
// Nearly every factor will have a pair, except a sqrt number. I.e. 9 has 1,3,9. Which is what line 29 does. 
const findFactors = number => {
  factors = 2

  maxSearch = (Math.sqrt(number))
  for (let i = 2; i < maxSearch; i++ ) {
    if (number % i === 0 ) {
      pairFactor = number / i
      i*i === number ? factors++ : factors += 2
      maxSearch = pairFactor
    }
  }
  return factors
}

// Iterates up the trinagle numbers until findFactors returns one greater than the input entered.
const findOverXFactors = factorLength => {
  let i = 1
  do {
    factors = findFactors(xthTriangle(i))
    i++
} while (factors < factorLength+1)
    return xthTriangle(i-1)
}

findOverXFactors(500)
// => 76,576,500