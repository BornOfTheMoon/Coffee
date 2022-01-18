const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    name: {type: String},
    hashedPassword: {type: String, required: true},
    type: String,
    achievements: Array,
    orders: Array,
    workspace: String,
    karma: Number,
    avatar: String,
    }
)


module.exports = userModel = new mongoose.model('Users', UserSchema)