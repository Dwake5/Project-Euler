// https://projecteuler.net/problem=22

// Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

// For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

// What is the total of all the name scores in the file?

// I have saved the file as Problem022-names.txt.
// The solution reads the file saved above, converts it into an array, so that it can be sorted.
// It is sorted alphabetically, then each word is put through asciiValue, this essentially maps letters to thier
// Place in the alphabet. A word is scored and then added to totalSum, loops to next word, etc. 


const allNamesScore = () => {
    let fs = require('fs')
    let totalSum = 0
    
    fs.readFile('./Problem022-names.txt', (err, data) => {
        solution(eval("[" + data.toString() + "]"))
    })

    const solution = data => {
        data.sort((a, b) => (a > b) - (a < b))
        for (let i = 0; i < data.length; i++) {
            totalSum += asciiValue(data[i]) * (i + 1)
        }
        return totalSum
    }

    const asciiValue = str => {
        let wordSum = 0;
        for (let i = str.length; i--; ) {
            wordSum += str.charCodeAt(i) - 64 // 96 if lowercase
        }
        return wordSum;
    }
}

allNamesScore()
// => 871,198,282