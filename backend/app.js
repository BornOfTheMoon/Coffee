import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import cookieParser from "cookie-parser";
import createUser from "./api/createUser.js"
import loginUser from "./api/loginUser.js";

const app = express()
app.use(cors())
app.use(express.json())

dotenv.config()

const port = 8000

mongoose.connect(process.env.MONGO_URI, () => console.log("Mongo connected successfully!"))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.use(cookieParser());
app.use('/api/register', createUser);
app.use('/api/login', loginUser);