// Importing modules
const express = require('express');
const fetch = require('node-fetch');
const app = express();

// Listening to port 3000
app.listen(3000, () => {
    console.log("Server Active");
});

// Get request 
app.get("/breakingbad", async (req, res) => {
    try{
        // Fetching the data
        const response = await fetch("https://www.breakingbadapi.com/api/characters?category=Breaking+Bad");

        // Parsing the data in json format
        const data = await response.json();

         // Sending a response
        res.send(data);
    }
    catch(error) {
        // Logging error if it occurs
        console.log(error);
    }

    // Logging the status code
    console.log(res.statusCode);
});

// Bonus
app.get("/bettercallsaul", async (req, res) => {
    try{
        // Fetching the data
        const response = await fetch("https://www.breakingbadapi.com/api/characters?category=Better+Call+Saul");

        // Parsing the data in json format
        const data = await response.json();

        // Sending a response
        res.send(data);
    }
    catch(error) {
        // Logging error if it occurs
        console.log(error);
    }

    // Logging the status code
    console.log(res.statusCode);
});