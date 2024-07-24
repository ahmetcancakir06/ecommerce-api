const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name']
    },
    description: {
        type: String,
        required: [true, 'Please provide a description']
    },
    price: {
        type: Number,
        required: [true, 'Please provide a price']
    },
    category: {
        type: String,
        required: [true, 'Please provide a category']
    },
    countInStock: {
        type: Number,
        required: [true, 'Please provide a count in stock']
    },
    imageUrl: {
        type: String,
        required: [true, 'Please provide an image URL']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);