// The Fibonacci sequence is defined by the recurrence relation:

// Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
// Hence the first 12 terms will be:

// F1 = 1
// F2 = 1
// F3 = 2
// F4 = 3
// F5 = 5
// F6 = 8
// F7 = 13
// F8 = 21
// F9 = 34
// F10 = 55
// F11 = 89
// F12 = 144
// The 12th term, F12, is the first term to contain three digits.

// What is the index of the first term in the Fibonacci sequence to contain 1000 digits?

const digitsOfFibonacci = digits => {
    let fib = ['1','1','1']
    while (fib[fib.length-1].length < digits) {
        let nextSum = (parseInt(fib[fib.length-1])+parseInt(fib[fib.length-2]))
        fib.push(nextSum.toString())
    }
    return fib.length-1
}

digitsOfFibonacci(1000)
// =>

// Another way to do this is to realise that the fibonacci sequence's growth converges to the golden ratio. 
// The golden ratio is calculated as (1 + 5**0.5) / 2 === 1.618033987...
let goldenRatio = (1 + 5**0.5) / 2
// If we take the two largest terms from those given to us and divide them 144/89 = 1.6179775
// We are already close at very low numbers. 
// We therefore have the much quicker calculation of working out how many times a number needs to be multiplied
// By the golden ratio to get to 10**1000 as per the question. 
// As an example if you were to calculate how many times you need to multiply 1 by 2 to get to 1,000,000
// The calculation is log(1,000,000) / log(2) ===  19.93...
// Testing this with 2**19.93... gives us 1,000,000 so it works.


const digitsOfFibonacci = digits => {
    return Math.log( BigInt(10**(digits-1)) / 144) / Math.log(goldenRatio) + 12 
}

digitsOfFibonacci(1000)
// Javascript displays infinity at a number higher than 10**308. As this question asks for a number
// Higher than that, it needs to be addressed. 