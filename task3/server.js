// Importing modules
const express = require('express');
const db = require('./connection');
const Character = require('./model');

const app = express();

app.use(express.urlencoded({extended: true}));

// Serving the html file
app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

// Posting the character to the database
app.post("/", (req, res) => {
    const newChar = new Character({
        _id: req.body.id,
        name: req.body.name,
        birthday: req.body.birthday,
        occupation: req.body.occupation,
        img: req.body.image,
        status: req.body.status,
        nickname: req.body.nickname,
        appearance: req.body.appearance,
        portrayed: req.body.portrayed,
        category: req.body.category
    });
    
    // Storing the data and checking for errors
    newChar.save((error) => {
        if(!error){
            // Redirecting to the webpage
            res.redirect("/");
        }
        else {
            // Logging the errors
            console.log(err);
        }
    });
});

// Listening on port 3000
app.listen(3000, () => {
    console.log("Server Active");
});