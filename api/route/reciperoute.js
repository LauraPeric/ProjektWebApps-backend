const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipecontroller');

router.post('/saverecipe', recipeController.createRecipe);

module.exports = router;