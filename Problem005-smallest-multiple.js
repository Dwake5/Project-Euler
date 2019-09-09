// https://projecteuler.net/problem=5
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

// This problem asks us to find the lowest number that multiple other given numbers can be evenly
// Divdided in to. Programmatically, perhaps the easiest way to do this is by making a for-loop
// And iterating upwards by the largest number to infinity and each time checking wether it is is divisible
// By all lesser numbers or not. 
// Of note is that ** means to the power to, often denoted with a ^ or just a smaller exponent with written math.

// I have done this much more mathematically.
// If we find the prime factors of 2 to 10 they are:
// 2 = 2
// 3 = 3 
// 4 = 2**2
// 5 = 5
// 6 = 2 + 3
// 7 = 7 
// 8 = 2**3
// 9 = 3**2
// 10 = 5 + 2
// Now look down the right hand side and if there are multiple powers of a number
// Only take the largest. So for example we ignore the right of 2 and 4 and just take 8's 2**3.
// We get 2**3, 3**2, 5, 7. Which when multipled together equal 2520, thus we discovered
// The root of the question and can apply this knowledge progomatically to the question.
// And make a much more general use case of the answer. 

const smallestCommonMultiple = (small, high) => {
    // A number smaller than 2 will break the function and has no impact on the answer, so is changed to 2
    if (small < 2) {
        small = 2
    }

    // Make an empty array and fill it will all numbers from small to high
    let numbers = []
    for (let i = small; i <= high; i++) {
        numbers.push(i);
    }

    // Create an empty array that will hold the highest powers
    let largestNeededFactors = {}

    // Returns an array of all prime factors.
    const allPrimeFactors = n => {
        if (n === 1) return 1
        let factors = []
        for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) { 
            if (n % i === 0) {  
                n/=i
                factors.push(i)
                i = 1
            } 
            if (i === Math.ceil(Math.sqrt(n)) && i !== 1) {
                factors.push(Number(n))
            }
        }
        return factors
    }

    // Counts how many of each number (what power it is too) is in the array, 
    // Passed to it from allPrimeFactors and then converts that into an object. 
    const countElements = arr => arr.reduce((result, elem) => {
        if (result.hasOwnProperty(elem)) {
        result[elem] += 1
        } else {
        result[elem] = 1
        }
        return result
    }, {})

    // The object passed from countElements is compared with the current highest,
    // Which are stored in largestNeededFactors and replaces them if they are larger.
    const compareWithCurrentLargest = (result) => {
        Object.entries(result).forEach(([key, value]) => {
            if (largestNeededFactors.hasOwnProperty(key)) {
                if (largestNeededFactors[key] < result[key]) {
                    largestNeededFactors[key] = value
                }
            } else {
                largestNeededFactors[key] = value
            }   
        })
        return largestNeededFactors
    }

    // Multiplies all the numbers**power's in largest needing factors to give the final answer.
    const finalCalculation = () => {
        let result = 1
        Object.entries(largestNeededFactors).forEach(([key, value]) => {
        result *= key ** value
        })
        return result
    }

    // For each number in the numbers array: 1. Find its prime factors 
    // 2. Convert them into a an object 3. Compare the object with the largest factors found so far.
    for(numb in numbers) {
        compareWithCurrentLargest(countElements(allPrimeFactors(numbers[numb])))
    }

    return finalCalculation()
}
  
smallestCommonMultiple(1,20)
// => 232,792,560
