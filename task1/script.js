// npm package to take input in the terminal
const readline = require("readline-sync");

// array to store the data read
let arr = [];

// number of words
const n = Number(readline.question());

for (let i = 0; i < n; i++) {  
    let c = 0;

    // reading the words
    let word = readline.question();

    // checking if this is the first word 
    if (i === 0) {
        arr[i] = {Word: word, Occurence: 1};
    }

    else {
        for (let j = 0; j < arr.length; j++) {
            // comparing
            if (word === arr[j].Word) {
                arr[j].Occurence += 1; 
                c++;          
            }
        }
        
        // adding to the array if its a distint word
        if (c === 0) {
            arr.push({Word: word, Occurence: 1});
        }
    }
}

// varaiable to store the output
let combinedString = "";

// putting all the occurances in one varaible
arr.forEach((item) => {
    combinedString += (item.Occurence).toString() + " ";
});

// output
console.log(arr.length);
console.log(combinedString);

