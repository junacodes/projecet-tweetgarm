const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
    platform: { type: String, required: true },
    content: { type: String, required: true },
    mediaUrl: { type: String },
    status: { type: String, enum: ['draft', 'scheduled', 'published'], default: 'draft' },
    // audience: { type: mongoose.Schema.Types.ObjectId, ref: 'Audience' },
    // tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }]
});

module.exports = mongoose.model('Post', postSchema);