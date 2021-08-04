// Importing modules
const express = require('express');
const fetch = require('node-fetch');
const app = express();

// Listening to port 3000
app.listen(3000, () => {
    console.log("Server Active");
});

// Get request 
app.get("/", async (req, res) => {
    // Fetching the data
    const response = await fetch("https://www.breakingbadapi.com/api/characters");

    // Parsing the data in json format
    const data = await response.json();

    // Sending a response
    res.send(data);
});