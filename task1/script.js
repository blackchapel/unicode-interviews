// npm package to take input in the terminal
const readline = require("readline-sync");

// array to store the data read
let arr = [];

// number of words
const n = Number(readline.question());

for (let i = 0; i < n; i++) {  
    let c = 0;

    // reading the words
    let s = readline.question();

    // checking if this is the first word 
    if (i === 0) {
        arr[i] = {word: s, occurence: 1};
    }

    else {
        for (let j = 0; j < arr.length; j++) {
            // comparing
            if (s === arr[j].word) {
                arr[j].occurence += 1; 
                c++;          
            }
        }
        
        // adding to the array if its a distint word
        if (c === 0) {
            arr.push({word: word, occurence: 1});
        }
    }
}

// varaiable to store the output
let combinedString = "";

// putting all the occurances in one varaible
arr.forEach((item) => {
    combinedString += (item.occurence).toString() + " ";
});

// output
console.log(arr.length);
console.log(combinedString);

// bonus 
arr.sort((a, b) => {
    return b.occurence - a.occurence;
});

console.log("");
console.log("Bonus: ");
console.log(`Most- ${arr[0].word}`);
arr.forEach((item) => {
    if(item.occurence === 1) {
        console.log(`Least- ${item.word}`);
    }
});

