const Comment = require('../models/commentmodel');

// svi kom
exports.getComments = async (req, res) => {
    try {
        const topicId = req.params.topicId;
        const comments = await Comment.find({ topicId: topicId }).sort({ createdAt: -1 }); // Sorting by newest first

        if (!comments.length) {
            return res.status(404).json({ message: 'No comments found for this topic' });
        }

        res.status(200).json(comments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// stvaranje novog kometnara
exports.createComments = async (req, res) => {
    try {
        const { topicId, author, content } = req.body;

        if (!topicId || !author || !content) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const newComment = await Comment.create({
            topicId,
            author,
            content
        });

        res.status(201).json(newComment);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
