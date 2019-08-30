// https://projecteuler.net/problem=17
// If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?

// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters.
// The use of "and" when writing out numbers is in compliance with British usage.

// We are asked to write out the numbers from one to one thousand and count all the letters.
// I found code from stack overflow that converts a number into a word and altered it, for this problems purpose.

const totalLetters = numbers => {

    let totalLetters = 0
  
    let digit = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
    let tens = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
  
    const inWords = num => {
        if ((num = num.toString()).length > 9) return 'overflow';
        n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
        if (!n) return; let str = '';
        str += (n[1] != 0) ? (digit[Number(n[1])] || tens[n[1][0]] + ' ' + digit[n[1][1]]) + 'billion ' : '';
        str += (n[2] != 0) ? (digit[Number(n[2])] || tens[n[2][0]] + ' ' + digit[n[2][1]]) + 'million ' : '';
        str += (n[3] != 0) ? (digit[Number(n[3])] || tens[n[3][0]] + ' ' + digit[n[3][1]]) + 'thousand ' : '';
        str += (n[4] != 0) ? (digit[Number(n[4])] || tens[n[4][0]] + ' ' + digit[n[4][1]]) + 'hundred ' : '';
        str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (digit[Number(n[5])] || tens[n[5][0]] + ' ' + digit[n[5][1]]) : '';
        return str.replace(/ +/g, "").length;
    }
  
    for (let i = 1; i <= numbers; i++) {
      totalLetters += inWords(i)
    }
  
    return totalLetters
  }
  
  totalLetters(1000)
  // => 21124
  