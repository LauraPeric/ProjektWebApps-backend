// models/recipemodel.js
const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    },
    photos: {
        type: [String],
        required: true,
    },
    comments: [
        {
            authorName: String,
            commentText: String,
        }
    ],
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;
