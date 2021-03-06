// https://projecteuler.net/problem=19

// You are given the following information, but you may prefer to do some research for yourself.

// 1 Jan 1900 was a Monday.
// Thirty days has September,
// April, June and November.
// All the rest have thirty-one,
// Saving February alone,
// Which has twenty-eight, rain or shine.
// And on leap years, twenty-nine.
// A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
// How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

// This problem can be easily solved by looping over the months and years and for each putting it into the inbuilt javascript Date library and then incrementing
// a variable if its a Sunday and returning that for the answer.

// Of note is that the Date library 0 index's months. i.e. January is 0
// When doing .getDay() Friday === 0 and Thursday === 6

const sundaysBetween = (startYear, endYear) => {
  let sundays = 0;
  for (let y = startYear; y <= endYear; y++) {
    for (let m = 0; m < 12; m++) {
      new Date(y, m, 1).getDay() === 2 ? sundays++ : null;
    }
  }
  return sundays;
};

sundaysBetween(1901, 2000);
// => 171
