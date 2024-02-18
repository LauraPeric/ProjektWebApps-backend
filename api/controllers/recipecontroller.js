const Recipe = require('../models/recipemodel');

const getRecipeById = async (recipeId) => {
    try {
        const recipe = await Recipe.findById(recipeId);
        if (!recipe) {
            return { success: false, error: 'Recipe not found' };
        }
        return { success: true, data: recipe };
    } catch (error) {
        console.error('Error fetching recipe by ID', error);
        return { success: false, error: 'Internal server error' };
    }
};

const createRecipe = async (recipeData) => {
    try {
        const newRecipe = new Recipe(recipeData);
        await newRecipe.save();
        return { success: true, message: 'Recipe created successfully' };
    } catch (error) {
        console.error('Error creating recipe', error);
        return { success: false, error: 'Internal server error' };
    }
};


module.exports = { getRecipeById, createRecipe };
