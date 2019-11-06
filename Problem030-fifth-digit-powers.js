// Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

// 1634 = 14 + 64 + 34 + 44
// 8208 = 84 + 24 + 04 + 84
// 9474 = 94 + 44 + 74 + 44
// As 1 = 14 is not a sum it is not included.

// The sum of these numbers is 1634 + 8208 + 9474 = 19316.

// Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.

// I have the built the function out to take any power input, quite easy as its only one param.
// A function is made which splits a number into an array of digits. It then maps over the array raising it to the given power.
// If the summed powers equal the number entered it will be added to answer.
// Ive had the loop in the last function go up to 9**(power+1), by doing some quick written work,
// this seems to be a safe upper limit.
// I did the powers from 3..7 and also wrote those answers. There are none for 2.

const sumDigitPowers = power => {
  let answer = 0;

  const sumRaisedToPower = number => {
    const numbs = [];
    const str = number.toString();
    let total = 0;

    for (let i = 0; i < str.length; i++) {
      numbs.push(+str.charAt(i));
    }

    numbs.map(digit => (total += digit ** power));

    if (total === number) {
      return total;
    }
  };

  for (let i = 2; i < 9 ** (power + 1); i++) {
    let result = sumRaisedToPower(i);
    if (result) {
      answer += result;
    }
  }

  return answer;
};

sumDigitPowers(5);
// 3 => 1301
// 4 => 19316
// 5 => 443839
// 6 => 548834
// 7 => 40139604
