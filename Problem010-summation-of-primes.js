// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

// Use previously created testPrime function, changed so it returns the number.
const testPrime = n => {
    if (n===1) {
        return null;
    } else {
        for (let x = 2; x <= Math.sqrt(n); x++) {
          if(n % x === 0) {
            return null;
          }
        }
        return n;  
    }
}

// Find the sum of all primes under 'number', line 24 is added so that i can be incremeted in 2's thus halfing the 
// Time of the calculation. I decided too add the sum to a running total, rather than push them into an array and use reduce.
const summationOfPrimesUnder = (number) => {
    let primeSum 

    number > 1 ? primeSum = 2 : primeSum = 0

    for(i = 3; i < number; i+=2) {
        prime = testPrime(i)
        prime ? primeSum += prime : null
    }
    return primeSum
}

summationOfPrimesUnder(2000000)
// => 142,913,828,922