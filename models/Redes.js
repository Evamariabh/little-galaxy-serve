const { Schema, model } = require('mongoose');

const redesSchema = new Schema({
    red: String,
    url: String,
    date: {
        type: Date,
        default: Date.now
    } 
}, {
    timestamps: true
});

module.exports = model('Redes', redesSchema);