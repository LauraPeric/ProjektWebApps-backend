const express = require('express');
const router = express.Router();
const Post = require('../models/postmodel');

// dohvat postova s filtriranjem po naslovu
router.get('/posts', async (req, res) => {
    try {
        const { cardtitle } = req.query;
        let query = {};

        if (cardtitle) {
            query.cardtitle = { $regex: cardtitle, $options: 'i' }; // pretraga neosjetljiva na velika/mala slova
        }

        const posts = await Post.find(query);
        res.json(posts);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;
