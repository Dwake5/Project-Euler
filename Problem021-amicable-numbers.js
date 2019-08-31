// https://projecteuler.net/problem=21
// Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
// If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

// For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

// Evaluate the sum of all the amicable numbers under 10000.

// I used the function I made for problem 12 to find how many factors are in a number,
// And altered it to output the sum of the factors. 
// I then iterated up to the max input, and save the result of putting in i.
// Then put that result back through the function. If i and the second result are equal.
// They are pushed into the amicable array. 
// This array is then uniqued with Set(arr) and reduced to its sum. 


const amicableNumbers = max => {
    const amicable = []

    const findSumOfFactors = number => {
        let original = number
        factors = [1]

        maxSearch = (Math.sqrt(number)+1)
        for (let i = 2; i < maxSearch; i++ ) {
        if (number % i === 0 ) {
            pairFactor = number / i
            if (i*i === number) {
            factors.push(i) 
            } else {
            factors.push(i, original/i)
            }
            maxSearch = pairFactor
        }
        }
        return factors.reduce((a, b) => a + b)
    }

    for (let i = 4; i <= max; i++) {
        let result = findSumOfFactors(i)
        let result2 = findSumOfFactors(result)
        if (i === result2 && result !== result2) {
        amicable.push(result, result2)
        }
    }

    return [...new Set(amicable)].reduce((a,b) => a +b)
}
  
amicableNumbers(10000)
// => 31,626