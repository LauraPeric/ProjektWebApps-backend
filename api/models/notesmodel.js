const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    usernotes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',


    },
    title: String,
    content: String,
    date: {
        type: Date,
        default: Date.now // stavlja defoltno vrijeme 
    }



});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;