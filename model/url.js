const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    url: {
        type: String,
        required: true
    },
     userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to User model
    required: true
  },
    visitHistory: [{
        timestamp: {
            type: Number
        }
    }]
}, { timestamps: true });

const URLModel = mongoose.model('url', urlSchema);

module.exports = URLModel; 