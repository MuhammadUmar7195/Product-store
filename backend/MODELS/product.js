const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product Name is Required.']
    },
    price: {
        type: Number,
        required: [true, 'Product Price is Required.']
    },
    image: {
        type: String,
        required: [true, 'Image URL is Required.'],
        unique: true
    }   
}, {
    timestamps: true // createdAt UpdatedAt
});

module.exports = mongoose.model("product", productSchema);
