// Work in progress

s = [
    [0,0,3,0,2,0,6,0,0],
    [9,0,0,3,0,5,0,0,1],
    [0,0,1,8,0,6,4,0,0],
    [0,0,8,1,0,2,9,0,0],
    [7,0,0,0,0,0,0,0,8],
    [0,0,6,7,0,8,2,0,0],
    [0,0,2,6,0,9,5,0,0],
    [8,0,0,2,0,3,0,0,9],
    [0,0,5,0,1,0,3,0,0]
  ]
  // Rows on the left, columns on top
  
  
  // Says which grid, a square is in
  const whatGrid = (row, col) => {
    let posibleGrids
    if (row > 5) {
      posibleGrid = [6,7,8]
    } else if (row > 2) {
      posibleGrid = [3,4,5]
    } else {
      posibleGrid = [0,1,2]
    }
    if (col > 5) {
      return posibleGrid[2]
    } else if (col > 2) {
      return posibleGrid[1]
    } else {
      return posibleGrid[0]
    }
  }
  
  grids = [
   [s[0][0], s[0][1], s[0][2],
    s[1][0], s[1][1], s[1][2],
    s[2][0], s[2][1], s[2][2]],
   [s[0][3], s[0][4], s[0][5],
    s[1][3], s[1][4], s[1][5],
    s[2][3], s[2][4], s[2][5]],
   [s[0][6], s[0][7], s[0][8],
    s[1][6], s[1][7], s[1][8],
    s[2][6], s[2][7], s[2][8]],
  
   [s[3][0], s[3][1], s[3][2],
    s[4][0], s[4][1], s[4][2],
    s[5][0], s[5][1], s[5][2]],
   [s[3][3], s[3][4], s[3][5],
    s[4][3], s[4][4], s[4][5],
    s[5][3], s[5][4], s[5][5]],
   [s[3][6], s[3][7], s[3][8],
    s[4][6], s[4][7], s[4][8],
    s[5][6], s[5][7], s[5][8]],
  
   [s[6][0], s[6][1], s[6][2],
    s[7][0], s[7][1], s[7][2],
    s[8][0], s[8][1], s[8][2]],
   [s[6][3], s[6][4], s[6][5],
    s[7][3], s[7][4], s[7][5],
    s[8][3], s[8][4], s[8][5]],
   [s[6][6], s[6][7], s[6][8],
    s[7][6], s[7][7], s[7][8],
    s[8][6], s[8][7], s[8][8]]
  ]
  
  rows = [
    [s[0][0], s[0][1], s[0][2], s[0][3], s[0][4], s[0][5], s[0][6], s[0][7], s[0][8]],
    [s[1][0], s[1][1], s[1][2], s[1][3], s[1][4], s[1][5], s[1][6], s[1][7], s[1][8]],
    [s[2][0], s[2][1], s[2][2], s[2][3], s[2][4], s[2][5], s[2][6], s[2][7], s[2][8]],
    [s[3][0], s[3][1], s[3][2], s[3][3], s[3][4], s[3][5], s[3][6], s[3][7], s[3][8]],
    [s[4][0], s[4][1], s[4][2], s[4][3], s[4][4], s[4][5], s[4][6], s[4][7], s[4][8]],
    [s[5][0], s[5][1], s[5][2], s[5][3], s[5][4], s[5][5], s[5][6], s[5][7], s[5][8]],
    [s[6][0], s[6][1], s[6][2], s[6][3], s[6][4], s[6][5], s[6][6], s[6][7], s[6][8]],
    [s[7][0], s[7][1], s[7][2], s[7][3], s[7][4], s[7][5], s[7][6], s[7][7], s[7][8]],
    [s[8][0], s[8][1], s[8][2], s[8][3], s[8][4], s[8][5], s[8][6], s[8][7], s[8][8]]
  ]
  
  cols = [
    [s[0][0], s[1][0], s[2][0], s[3][0], s[4][0], s[5][0], s[6][0], s[7][0], s[8][0]],
    [s[0][1], s[1][1], s[2][1], s[3][1], s[4][1], s[5][1], s[6][1], s[7][1], s[8][1]],
    [s[0][2], s[1][2], s[2][2], s[3][2], s[4][2], s[5][2], s[6][2], s[7][2], s[8][2]],
    [s[0][3], s[1][3], s[2][3], s[3][3], s[4][3], s[5][3], s[6][3], s[7][3], s[8][3]],
    [s[0][4], s[1][4], s[2][4], s[3][4], s[4][4], s[5][4], s[6][4], s[7][4], s[8][4]],
    [s[0][5], s[1][5], s[2][5], s[3][5], s[4][5], s[5][5], s[6][5], s[7][5], s[8][5]],
    [s[0][6], s[1][6], s[2][6], s[3][6], s[4][6], s[5][6], s[6][6], s[7][6], s[8][6]],
    [s[0][7], s[1][7], s[2][7], s[3][7], s[4][7], s[5][7], s[6][7], s[7][7], s[8][7]],
    [s[0][8], s[1][8], s[2][8], s[3][8], s[4][8], s[5][8], s[6][8], s[7][8], s[8][8]]
  ]
  // Helper function, says where the 0's are so they can be checked for a solution
  const getAllZeroIndex = (where, numb) => {
    let indexes = where[numb].reduce(function(a, e, i) {
        if (e === 0)
          a.push(i);
        return a
    }, []); 
    return indexes
  }
  
  // Helper function, returns the numbs needed in the row/col/grid
  const numbsNeededFunc = (where, numb) => {
    let numbsNeeded = []
    for (let i = 1; i <= 9; i++) {
      where[numb].includes(i) ? null : numbsNeeded.push(i)
    }
    return numbsNeeded
  }
  
  const checkRow = numb => {
    let numbsNeeded = numbsNeededFunc(rows, numb)
    let checkPlaces = getAllZeroIndex(rows, numb)
    return numbsNeeded
  }
  
  const checkCol = numb => {
    let numbsNeeded = numbsNeededFunc(cols, numb)
    let checkPlaces = getAllZeroIndex(cols, numb)
    console.log(checkPlaces)
    for ( let i = 0; i < checkPlaces.length; i++) {
      for ( let j = 0; i < numbsNeeded.length; i++) {
  
      }
    } 
  }
  
  
  console.log(cols[6])
  checkCol(6)
  