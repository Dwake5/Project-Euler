// https://projecteuler.net/problem=23

// A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

// A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

// As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

// Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.

const abundantNumbers = [];
let result = 0;

const isItAbundant = number => {
  let divisorsSum = 1;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      divisorsSum += i;
      divisorsSum += number / i;
    }
  }
  if (Math.sqrt(number) % 1 === 0) {
    divisorsSum -= Math.sqrt(number);
  }

  return divisorsSum > number ? 1 : 0;
};

const populateAbundantNumbers = () => {
  for (let i = 12; i < 28123; i++) {
    if (isItAbundant(i)) {
      abundantNumbers.push(i);
    }
  }
};

const arrayCanSumToX = numb => {
  const length = abundantNumbers.length;
  let low = 0;
  let high = length;

  while (low <= high) {
    if (abundantNumbers[low] + abundantNumbers[high] === numb) {
      return true;
    } else if (abundantNumbers[low] + abundantNumbers[high] < numb) {
      low++;
    } else {
      high--;
    }
  }
  return false;
};

const checkIfProductOfTwoAbundant = () => {
  for (let i = 1; i < 28123; i++) {
    if (!arrayCanSumToX(i)) {
      result += i;
    }
  }
  return result;
};

populateAbundantNumbers();
checkIfProductOfTwoAbundant();
// => 4179871
