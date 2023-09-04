const {Schema, model} = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const badgeSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    content: {
        type: String,
        required: true,
        trim: true,
    },
});

const Badge = model('Badge', badgeSchema);

module.exports = Badge;