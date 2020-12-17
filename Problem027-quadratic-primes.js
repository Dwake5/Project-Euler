const isNumberPrime = n => {
    if (n <= 1) return false
    if (n === 2) return true
    if (n % 2 === 0) return false
    
    for (let x = 3; x <= Math.sqrt(n); x+=2) {
      if(n % x === 0) {
        return false;
      }
    }
    
    return true;   
} 
  
const largestProducts = (a = 1000, b = 1000) => {
    let largestSeries = 0
    let highestAB = [0,0]

    for (i = -a; i < a; i++) {
        for (j = -b; j <= b; j++) {
        let n = 0
        let testIfPrime = n**2 + i*n + j
        while (isNumberPrime(testIfPrime)){
            n++
            testIfPrime = n**2 + i*n + j
        }
        if (n > largestSeries) {
            largestSeries = n
            highestAB = [i,j]
        }
        n = 0
        }
    }
    return highestAB[0] * highestAB[1]
}

largestProducts()
// ==> -59,231
