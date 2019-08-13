// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

// Firstly to improve the efficiency of the algorithm we can set some 
// Boundries and limits.
// For a+b+c to equal 1000, the lowest c can be is 41.4% of the total. 
// C will be a minimum of 414 in this example.
// The highest it can be is approximately 50% of the total. 

// The lowest range is found by doing ((2^0.5-1)*100)
// The highest range is found by using a formula I evented.
// For any odd number. x^2 + (((x-1)^2)/2)^2 = (((x+1)^2)/2)^2
// This is the lowest the left side can be and thus the max the right can be.
// Putting in a high number and calculating it, asymptotes towards 50%

// We have calculated that 414 <= C <= 500.
// We can therefore state that 500 <= a+b <= 586 
// A can be a minimum of 2 and B can be a max imum of 498

// I have increased the efficiency of most solutions online by 16x. They are going from 1 to 1000 for both of a + b.
// Here a and b are only going from 0 -> 0.25 and 0.25 -> 0.5, respectively. Essentially they are checking 1000^2 things,
// Compared to my 250^2 calculations. 1000^2 / 250^2 = 1/16

const findPythagoreanTriple = (target) => {
    let final = []
    let aMax = bMin = Math.ceil(target/4)
    let bMax = bMin * 2
    for (let a = 3; a <= aMax; a++ ) {
        for (let b = bMin; b <= bMax; b++ ) {
          let c = (a**2 + b**2)**0.5
            if (c % 1 === 0 && (a+b+c === target)) {
                return final.push(a, b, c)
            }
        }
    }
}

findPythagoreanTriple(1000)
// => 200, 375, 425
