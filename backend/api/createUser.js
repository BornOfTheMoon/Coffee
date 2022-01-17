import express from "express"
import { userModel } from "../models/UserModel.js";
import bcrypt from "bcryptjs"

const router = express.Router();

router.post('/', async (req, res) => {
    const {username, password, passwordAgain} = req.body;

    if (password !== passwordAgain) {
        res.status(400).send("Passwords are not equal")
    }

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds)
    const hashedPassword = await bcrypt.hash(password, salt);

    let user = new userModel({username, hashedPassword});
    user.save((err) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error while registering, please, try again")
        } else {
            res.status(200).send("Welcome on board!")
        }
    });
});

export default router