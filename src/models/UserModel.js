import * as mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: String,
    name: String,
    hashedPassword: String,
    type: String,
    achievements: Array,
    orders: Array,
    workspace: String,
    karma: Number,
    }
)

const userModel = mongoose.model('Users', UserSchema)

export default userModel