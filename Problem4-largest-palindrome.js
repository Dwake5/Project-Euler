// A palindromic number reads the same both ways. 
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.


// Test if number is a palindrome. If length is odd it removes the middle digit.
// Then it splits the number into two halves, reverses the second one and compares the two halves.
const isPalindrome = (number) => {
    let string = "" + number
    let length = string.length
    
    if (length % 2 !== 0) {
      string = string.slice(0, (length-1)/2) + string.slice((length+1)/2)
    }

    let firstHalf = string.slice(0,length/2)
    let secondHalf = string.slice(length/2, length+1)
    secondHalf = secondHalf.split("").reverse().join("")
    if (firstHalf === secondHalf) {
        return true
    } else {
        return false
    }
}

const highestPalindrome = () => {
    let highest = 0 
    let bestI = 0
    let bestJ = 0
    for (let i = 999; i > 700; i-- ) {
        for (let j = 999; j > 700; j--) {
            if (isPalindrome(i*j)){
                current = i*j
                if (current > highest) {
                    highest = current
                    bestI = i
                    bestJ = j
                }
            }
        }
    }
    return `Highest palindrome is at ${highest}, using ${bestI} and ${bestJ}`
}

highestPalindrome()
// => 'Highest palindrome is at 906609, using 993 and 913'