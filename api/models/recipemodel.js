const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    authorName: { type: String, required: true },
    recipeDetails: { type: String, required: true },
    recipeImage: { type: String, required: true },
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
