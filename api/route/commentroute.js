const express = require('express');
const commentsController = require('../controllers/commentscontroller'); // Adjust the path as necessary
const router = express.Router();

// Route to get all comments for a specific topic
router.get('/topics/:topicId/comments', commentsController.getComments);

// Route to create a new comment under a topic
router.post('/topics/:topicId/comments', commentsController.createComments);

module.exports = router;

