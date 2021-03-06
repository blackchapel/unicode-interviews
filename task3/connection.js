// Importing the modules
const mongoose = require('mongoose');

const connectionParameters = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
};

// Connecting to the database
const uri = `mongodb+srv://unicode:unicodenodejs34@cluster0.jpcvy.mongodb.net/unicode?retryWrites=true&w=majority`;
const connection = mongoose.connect(uri, connectionParameters)
    .then(() => {
        console.log("Connected to database");
    })
    .catch((err) => {
        console.log(err);
    });

// Exporting the modules
module.exports = connection;