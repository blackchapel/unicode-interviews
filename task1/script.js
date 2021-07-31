const readline = require("readline-sync");

let arr = [];

const n = Number(readline.question());

for (let i = 0; i < n; i++) {  
    let c = 0;
    let word = readline.question();

    if (i === 0) {
        arr[i] = {Word: word, Occurence: 1};
    }

    else {
        for (let j = 0; j < arr.length; j++) {
            if (word === arr[j].Word) {
                arr[j].Occurence += 1; 
                c++;          
            }
        }
        
        if (c === 0) {
            arr.push({Word: word, Occurence: 1});
        }
    }
}

let combinedString = "";

arr.forEach((item) => {
    combinedString += (item.Occurence).toString() + " ";
});

console.log(arr.length);
console.log(combinedString);

