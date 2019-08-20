// https://projecteuler.net/problem=16
// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

// What is the sum of the digits of the number 2^1000?


// Will not work with any input over 1023

const sumOfDigits = maxPower => {
    let allDigits = BigInt(2 ** maxPower).toString().split("")
  
    return allDigits.reduce((a, b) => a + parseInt(b), 0)
}
  
sumOfDigits(1000)
// => 1366
  
  