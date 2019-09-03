// https://projecteuler.net/problem=58
// Starting with 1 and spiralling anticlockwise in the following way, a square spiral with side length 7 is formed.

// 37* 36 35 34 33 32 31*
// 38 17* 16 15 14 13* 30
// 39 18  5* 4  3* 12 29
// 40 19  6  1  2 11 28
// 41 20  7*  8  9 10 27
// 42 21 22 23 24 25 26
// 43* 44 45 46 47 48 49

// It is interesting to note that the odd squares lie along the bottom right diagonal, but what is more interesting is that 8 out of the 13 numbers lying along both diagonals are prime; that is, a ratio of 8/13 ≈ 62%.

// If one complete new layer is wrapped around the spiral above, a square spiral with side length 9 will be formed. If this process is continued, what is the side length of the square spiral for which the ratio of primes along both diagonals first falls below 10%?

// Essentially this question is:
// Starting with 1 and then wrapping increasing digits around it in an anti clockwise direction
// Each time a square is formed asking what proportion of the numbers on the two diagonals are prime.
// At the start of our 7 by 7 square 8 of the 13 are primes, when that ratio is first lower than 10% we have solved it.

// This is very similiar to a problem I solved recently, but anti clockwise instead of clockwise. This has no bearing on the question and is a red herring.
// The 4 diagonols added to each spiral are easily predictable and calculated. 
// So I shall generate only the 4 new ones, test them each for primeness and then update global prime/nonprime variables.
// And after update the globals check the ratio. When it is below 1/10 The program will exit and the legth of the side revealed or calculated.

// Takes a long time to run (1m or so for 10% input)

const sizeOfSpiralPrimeUnder = percent => {
    let primes = 5 // 3,5,7
    let notPrimes = 2 // 1,9
    let currentSquareSize = 3
    let ratio = 1
  
    const testPrime = n => {
      if (n===1) {
        return false;
      } else {
        for (let x = 2; x <= Math.sqrt(n); x++) {
            if(n % x === 0) {
            return false;
            }
        }
        return true;  
      }
    }
  
    const generateNextFour = () => {
      currentSquareSize += 2
      square = currentSquareSize
      let nextFour = [
          square**2, square**2-(square-1), square**2-(square-1)*2, square**2-(square-1)*3
      ]
      return nextFour
    }
  
    const updatePrimesForLastFour = numbs => { 
      numbs.forEach(num => {
        let value = testPrime(num)
        value ? primes++ : notPrimes++
      })
    }
  
    const testRatio = () => {
      ratio = primes/(notPrimes+primes)
    }
  
    while (ratio > percent/100) {
      updatePrimesForLastFour(generateNextFour())
      testRatio()
    }
    
    return 'Primes have fallen under ' + percent + '%, when the square size is ' + currentSquareSize      
}
  
sizeOfSpiralPrimeUnder(10)
// => 'Primes have fallen under 10%, when the square size is 26,251'