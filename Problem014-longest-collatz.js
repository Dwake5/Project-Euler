// The following iterative sequence is defined for the set of positive integers:

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

// Using the rule above and starting with 13, we generate the following sequence:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under one million, produces the longest chain?

// NOTE: Once the chain starts the terms are allowed to go above one million.

// This squence asks you to stop at 1, because 1 would be (3*1)+1 = 4, it will half twice and then repeat. 
// This problem is much more interesting than previous from both a mathematical and progomatical perspective. 
// When calculating a few dozen values, you would see a tree emerge. 
// When your starting number reaches any value in this tree, the distance to the root could be added to the distance so far and a new node added to the tree.
// For example take the powers of two, these will always quickly lead back to 1, because they are all even and will keep halving as per the formula.

// How I solved it.
// First I created an empty object, this will be to store the tree. The tree will store every number it uses or sees
// And add it to the object with its distance in steps to 1.
// For example 16 will be go 16 -> 8 -> 4 -> 2 -> 1. 
// The object after that would look like this { '2': 1, '4': 2, '8': 3, '16': 4 }
// The reasoning behind this is so that when checking how many steps a number has to go through to reach 1, it doesnt have to go through the enitre process.
// Because any number already encountered has been documented and can be short-circuited. 
// Takes roughly 10 seconds to run. 

const longestPathUnder = (highest) => {
    let distToOne = {}
  
    // Calculates steps need to get to 0, if even halves it, if odd multiplies by 3 and adds 1. 
    // Then checks if that new number has been seen before and if it has adds the distance to 1 to the distance it has travelled, 
    // And all the ones in between and stores them in the object.
    const stepsToTake = numb => {
      let original = numb
      let path = []
      let ending = 0
  
      while (numb > 1) {
        if (numb % 2 === 0) {
          numb/=2
          if (!!distToOne[numb]) {
            ending = distToOne[numb] 
            numb = 1 // numb = 1 to short circuit the function
          }
        } else {
          numb = numb*3 + 1
          if (!!distToOne[numb]) {
            ending = distToOne[numb] 
            numb = 1
          }
        }
        // Pushing the numb into the beginning of the path taken
        path.unshift(numb)
      }
      path.shift()
      path.push(original)
      // Add the new path onto the existing paths
      path.forEach((num,i) => {
        distToOne[num] = i+1+ending
      })
    }
  
    for (let i = 2; i < highest; i++) {
      stepsToTake(i)
    }
  
    // Find the largest chain
    let largestStart = Object.keys(distToOne).reduce((a, b) => distToOne[a] > distToOne[b] ? a : b);
  
    // Find where the largest chain originated
    let stepsTaken = distToOne[largestStart]
  
    return `The longest chain is ${stepsTaken} when starting with ${largestStart}`
}
  
longestPathUnder(1000000)
// => 'The longest chain is 524 when starting with 837,799'
