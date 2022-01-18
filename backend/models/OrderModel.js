const mongoose = require("mongoose");


const OrderSchema = new mongoose.Schema({
        id: {type: Number, required: true, unique: true, autoIncrement: true, firstValue: 0},
    // as I understand it, type 'Date' stores both the date and time
        date: Date,
        price: Number,
        status: {type: String, default: "wait confirm"},
        place: String,
        products: Array,
    }
)


module.exports = orderModel = new mongoose.model('Orders', OrderSchema)
