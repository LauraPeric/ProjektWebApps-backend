const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
    cardtitle: {
        type: String,
        required: true,
    },
    cardtext: {
        type: String,
        required: true,
    },
    route: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Post", PostSchema);