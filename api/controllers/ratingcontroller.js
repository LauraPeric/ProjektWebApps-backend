const Rating = require('../models/ratingmodel');

const rateRecipe = async (userId, recipeId, rating) => {
    try {
        const newRating = new Rating({
            userId,
            recipeId,
            rating,
        });

        await newRating.save();

        return { success: true, message: 'Rating created successfully' };
    } catch (error) {
        console.error('Error creating rating', error);
        return { success: false, error: 'Internal server error' };
    }
};

module.exports = { rateRecipe };
