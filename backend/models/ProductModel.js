const mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema({
        name: {type: String, required: true, unique: true},
        description: String,
        category: String,
        price: Number,
        positiveRating: {type: Number, default: 0},
        negativeRating: {type: Number, default: 0},
    }
)


module.exports = productModel = new mongoose.model('Products', ProductSchema)
