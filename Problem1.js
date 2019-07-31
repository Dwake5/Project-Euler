// Multiples of 3 and 5 - Problem 1
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Q. Find the sum of all the multiples of 3 or 5 below 1000.
// Answer:

function multiplesUnderX (num1, num2, upper) {
    let sum = 0 
    for (let i = 0; i < upper; i++ ) 
    if (i % num1 == 0)
        {sum += i}
    else if (i % num2 == 0)
        {sum += i}
    return sum
}

