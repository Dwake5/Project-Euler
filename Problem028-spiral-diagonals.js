// Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

// 21* 22 23 24 25*
// 20  7*  8  9* 10
// 19  6  1*  2 11
// 18  5*  4  3* 12
// 17* 16 15 14 13*

// It can be verified that the sum of the numbers on the diagonals is 101.

// What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?

// Doing some work on this problem I quickly see a pattern emerge.
// With this sort of growing problem it is often wise to calculate a few iterations and see what if any patterns emerge.
// Looking at a 1 by 1 grid, just gives us 1. (n0)
// If we now do 3 by 3, we add the numbers 3,5,7,9 (n1)
// 5 by 5, gives the numbers 13,17,21,25 (n2)
// 7 by 7, gives the numbers 31,37,43,49 (n3)

// By this I mean that whatever the total sum was of a lower square we can add on, 
// The outputted numbers for the new total, the lower squares dont change as it grows.
// We can see in n1, the terms increase by 2, in n2 they increase by 4 and in n3 they increase by 6.
// We can further see that the jump from the last term in n0 to the first in n1 is 2.
// The next jump is 4, then 6. We an also see the increase of the last term increases by 8,16,24 and so on.

const diagonalSum = length => {
    if (length % 2 === 0) return 'Length must be odd'
  
    let result = 1
    for (let i = 3; i <= length; i+=2) {
      result += (i**2 - ((i-1)/2)*3)*4
    }
    return result
}
  
diagonalSum(1001)
// => 669171001
  

// An amazingly efficient solution I found online, after completing my own is this
// It doesnt iterate and has O(1) time complexity
// I knew a solution this elegant was possible, but after working on it after sometime, 
// Settled with my own, which was still pretty fast even inputting values in the millions.

const diagonalSum = length => {
    if (length % 2 === 0) return 'Length must be odd'
  
    return 2 * length * (8 * length * length + 15 * length + 13) / 3 + 1;
}


