
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