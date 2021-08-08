// Importing the module
const mongoose = require('mongoose');

// Creating a schema
const schema = new mongoose.Schema({
    _id: Number,
    name: String,
    birthday: String,
    occupation: [String],
    img: String,
    status: String,
    nickname: String,
    appearance: [Number],
    portrayed: String,
    category: [String]
});

const Character = mongoose.model('Character', schema);

// Exporting the module
module.exports = Character;