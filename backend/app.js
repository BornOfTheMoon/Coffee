const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const createUser = require("./api/createUser.js");
const loginUser = require("./api/loginUser.js");
const getUserFromToken = require("./api/getUserFromToken.js");

const app = express()
app.use(cors())
app.use(express.json())

dotenv.config()

const port = 8000

mongoose.connect(process.env.MONGO_URI, () => console.log("Mongo connected successfully!"))

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

app.use(cookieParser());
app.use('/api/register', createUser);
app.use('/api/login', loginUser);
app.use('/api/verify', getUserFromToken);