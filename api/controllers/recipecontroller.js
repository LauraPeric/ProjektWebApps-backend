const Recipe = require('../models/recipemodel');

// metoda za spremanje recepta
exports.createRecipe = async (req, res) => {
    try {
        const { title, description, authorName, recipeDetails, recipeImage } = req.body;
        const recipe = await Recipe.create({ title, description, authorName, recipeDetails, recipeImage });
        res.status(201).json(recipe);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
