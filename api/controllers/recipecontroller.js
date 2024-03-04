const Recipe = require('../models/recipemodel');

// netoda za spremanje recepta
const saveRecipe = async (req, res) => {
    try {
        const { title, description, authorName, recipeDetails } = req.body;

        const recipeImage = req.files.map(file => ({
            data: file.buffer,
            contentType: file.mimetype,
        }));

        const newRecipe = new Recipe({
            title,
            description,
            authorName,
            recipeDetails,
            recipeImage,
        });

        const savedRecipe = await newRecipe.save();

        res.status(201).json(savedRecipe);
    } catch (error) {
        console.error('Greška prilikom spremanja recepta:', error);
        return res.status(500).json({ error: 'Došlo je do interne pogreške.' });
    }
};

module.exports = { saveRecipe };