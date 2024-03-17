const express = require('express');
const router = express.Router();
const multer = require('multer'); // multer za obradu slika
const recipeController = require('../controllers/recipecontroller');

// konfiguracija multera za pohranu slika
const storage = multer.memoryStorage(); //za vise slika NERDI
const upload = multer({ storage: storage });

router.post('api/saverecipe', upload.array('recipeImages', 5), recipeController.saveRecipe);

module.exports = router;