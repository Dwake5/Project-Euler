// https://projecteuler.net/problem=7
// This question asks you to find the 10,001st prime number. 
// I first created a function to test if a number is prime. The testPrime function returns false for 1, an agreed upon rule in mathematics.
// It then iterates up to, and including, the sqrt of a given number. This reduces the time complexity of the function from O(n) to O(sqrt(n)).
// The overarching function pushes primes into an array, when that is equal in length to the entered number, the function returns
// The last element in that array. The final solution to the question is 104,743.

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

const findXthPrime = (number) => {
    foundPrimes = []
    let i = 1
    while (foundPrimes.length < number) {
        prime = testPrime(i)
          if (prime) {
            foundPrimes.push(i)
            i++
          } else 
            { i++ }
    } 
    return foundPrimes[number-1]
}

findXthPrime(10001)
=> 104,743
