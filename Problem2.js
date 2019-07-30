// This is my solution to problem 2.
// https://projecteuler.net/problem=2
// It asks you to sum up all the even numbers in the fibonacci sequence where the maximum value doesnt  
// Exceed 4 million. 
// I have solved it more generally so the maximum value is input in the function.
// The answer with 4 million is 4613732

const sumOfEvenFibUnderX = (max) => {
    // This has to be initiated to start off the sequence.
    let fibonacci = [0, 1]
    let i = 2;
    let sum = 0

    while (fibonacci[i-1] + fibonacci[i-2] <= max){
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
        i += 1;
    }

    // Every 3rd number in the fibonnaci sequence is even. 
    for ( let i = 0; i < fibonacci.length; i+=3) {
        sum += fibonacci[i]
    }

    return sum
}
