const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    product: String,
    price: Number,
    stock: Number,
    details: String,
    etiqueta: String,
    estado: Boolean,
    date: {
        type: Date,
        default: Date.now
    } 
}, {
    timestamps: true
});

module.exports = model('Product', productSchema);