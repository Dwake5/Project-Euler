// https://projecteuler.net/problem=3
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

// Every number can be made up of prime factors. This means that a collection of prime numbers can be multiplied together to
// Reach any number, and the ones that do so for a number are its prime factors. 
// My function iterates upwards from 2 and divides it by the first number it can divide it perfectly by, i.e. with no remainder.
// The number it was divided by then goes into the factors array. i is then reset back to 1 and increased to two and then iterated again.
// This is because a number like 1024 will be cotinuously divided by 2. 
// I have greatly increased the efficiency of my forumla by only having it go the sqrt of a number rather than all the way up to it.
// If you can't divide a number by its square root or less then you can't divide by anything greater.
// So if i reaches this sqrt number, the number is prime and thus is pushed onto the end of the array and the repeated iteration stops.
// Finally the function returns the last element in the array which is also the highest. 

const largestPrimeFactor = n => {
  if (n === 1) return 1
  let factors = []
  for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) { 
    if (n % i === 0) {  
      n/=i
      factors.push(i)
      i = 1
    } 
    if (i === Math.ceil(Math.sqrt(n)) && i !== 1) {
      factors.push(n)
    }
  }
  return factors[factors.length-1]
}

largest_prime_factor(600851475143)
=> 6857
