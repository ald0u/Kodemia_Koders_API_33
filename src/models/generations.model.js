const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    number: {
        type: Number,
        required: true,
        min: 1,
        max: 100
    },
    program: {
        type: String,
        required: true,
        enum: [
            'javascript',
            'python',
            'ios',
            'android'
        ]
    },
    startData: {
        type: Date,
        required: true
    },
    endData: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('generations', schema)