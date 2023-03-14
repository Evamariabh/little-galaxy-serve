const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: String,
    password: String,
    confirPass: String,
    email: String,
    date: {
        type: Date,
        default: Date.now
    } 
}, {
    timestamps: true
});

module.exports = model('User', userSchema);