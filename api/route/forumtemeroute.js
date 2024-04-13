const express = require('express');
const router = express.Router();
const Topic = require('../models/forumtopicmodel'); // uvoz modela teme

// ruta za spremanje nove teme
router.post('/topics', async (req, res) => {
    try {
        const newTopic = new Topic(req.body);
        const savedTopic = await newTopic.save();
        res.status(201).json(savedTopic);
    } catch (error) {
        console.error('Greška prilikom spremanja teme:', error);
        res.status(500).json({ error: 'Došlo je do interne pogreške.' });
    }
});

module.exports = router;
