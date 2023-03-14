const { Schema, model } = require('mongoose');

const iotSchema = new Schema({
    temperatura: String,
    date: {
        type: Date,
        default: Date.now
    } 
}, {
    timestamps: true
});

module.exports = model('Iot', iotSchema);