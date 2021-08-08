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
            console.log(re.status);
        }
    });
});

// Task 4
app.post("/delete", (req,res) => {
    // Storing the id of the character to be deleted 
    const id = req.body.delete;

    // Deleteing the character from the database
    Character.deleteOne({_id: id}, (error) => {
        if (!error) {
            // Sending back a reponse
            res.redirect("/data");
        }
         else {
            // Logging the errors
            console.log(error);
            console.log(res.status);
        }
    });
 });

// Displaying the Database
let data = [];
app.get("/data", async (req, res) => {
    await Character.find({}, (error, characters) => {
        if(!error){
            data = characters;
            res.send(data);
        }
        else {
          console.log(err);
          console.log(res.status);
        }
      });
})

// Listening on port 3000
app.listen(3000, () => {
    console.log("Server Active");
});