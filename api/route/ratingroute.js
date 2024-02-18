const express = require('express');
const router = express.Router();
const RatingController = require('../controllers/ratingcontroller');

// Endpoint za ocjenjivanje recepta
router.post('/recipes/:recipeId/rate', async (req, res) => {
    const { recipeId } = req.params;
    const { userId, rating } = req.body;

    const result = await RatingController.rateRecipe(recipeId, userId, rating);

    if (result.success) {
        res.json({ message: result.message });
    } else {
        res.status(500).json({ error: result.error.message });
    }
});

module.exports = router;
