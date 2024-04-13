const express = require('express');
const router = express.Router();
const multer = require('multer'); // multer za obradu slika
const recipeController = require('../controllers/recipecontroller');

router.post('/saverecipe', recipeController.createRecipe);

module.exports = router;