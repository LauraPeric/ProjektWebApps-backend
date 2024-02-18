const Note = require('../models/notesmodel');

exports.getNote = async (req, res) => {
    try {
        const userId = req.params.userId;
        const notes = await Note.find({ usernotes: userId });

        if (notes.length === 0) {
            return res.status(404).json({ error: 'No notes found' });
        }

        res.status(200).json(notes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
// Stvori novu biljesku
exports.createNote = async (req, res) => {
    try {
        const { usernotes, title, content } = req.body;
        const note = await Note.create({ usernotes, title, content });
        res.status(201).json(note);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// obrisi biljesku
exports.deleteNote = async (req, res) => {
    try {
        const noteId = req.params.noteId;

        // nadji biljesku po idu i obrisi ju
        const note = await Note.findByIdAndDelete(noteId);

        if (!note) {
            return res.status(404).json({ error: 'Note not found' });
        }

        res.status(200).json({ message: 'Note deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
exports.updateNote = async (req, res) => {
    try {
        const noteId = req.params.noteId;
        const { title, content } = req.body;

        // nadji po id biljesku i updejtaj ju
        const note = await Note.findByIdAndUpdate(
            noteId,
            { title, content },

        );

        if (!note) {
            return res.status(404).json({ error: 'Note not found' });
        }

        res.status(200).json(note);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};