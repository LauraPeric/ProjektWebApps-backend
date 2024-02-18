const express = require('express');
const router = express.Router();
const RecipeController = require('../controllers/recipecontroller');
const Rating = require('../models/ratingmodel');


// Endpoint za prikaz pojedinog recepta
router.get('/recipes/:recipeId', async (req, res) => {
    const { recipeId } = req.params;

    try {
        const recipe = await RecipeController.getRecipeById(recipeId);

        if (!recipe) {
            return res.status(404).json({ error: 'Recipe not found' });
        }

        res.json(recipe);
    } catch (error) {
        console.error('Error fetching recipe', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Endpoint za ocjenjivanje recepta 
router.post('/recipes/:recipeId/rate', async (req, res) => {
    const { recipeId } = req.params;
    const { userId, rating } = req.body;

    try {
        const recipe = await RecipeController.rateRecipe(recipeId);

        if (!recipe) {
            return res.status(404).json({ error: 'Recipe not found' });
        }

        // stvara novi zapis u modelu Rating
        const newRating = new Rating({
            userId,
            recipeId,
            rating,
        });

        // sprema ocjenu
        await newRating.save();

        res.json({ message: 'Recipe rated successfully' });
    } catch (error) {
        console.error('Error rating recipe', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports = router;
