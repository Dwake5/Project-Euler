// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down,
// there are exactly 6 routes to the bottom right corner.
// How many such routes are there through a 20×20 grid?

// After thinking about this problem for a little while, it seems though it can be condensed into a simple 'X choose Y' problem.
// That is to say, to navigate from a corner of a grid to the opposite corner only when going right and down, you have a total of 
// (side A) * (side B) choices to make to reach the end. 
// A single solution for a problem will look akin to RDRD. R = right and D = down. So in the example shown, a 2 x 2 grid.
// Two R's are needed as are 2 D's, the position of these in the 4 digit solution being irrelevant. So the question condenses down to
// How many ways can 2 things be placed into 4 places.  
// If you look over the example on the project website archive there solutions would be:
// RRDD, RDRD, RDDR, DRRD, DRDR, DDRR.


// Create a factorial function, as thats neccessary to our answer.
const factorial = n => {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

// This will give the correct solution to the proposed question
const waysThroughSquareGrid = ( sideLength ) => {
  if (sideLength === 0) return 0
  positionsToNavigate = factorial(sideLength*2)
  return positionsToNavigate / ( factorial(sideLength)**2 )
}

// This is a more generalized solution with different side lengths
const waysThroughGrid = ( sideA, sideB ) => {
  if (sideA === 0) return sideB 
  if (sideB === 0) return sideA
  positionsToNavigate = factorial((sideA) + (sideB))
  return positionsToNavigate / (factorial(sideA) * factorial(sideB))
}

waysThroughSquareGrid(20)
137846528820
