const express = require("express");
const userModel = require("../models/UserModel.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");


dotenv.config()

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
            const secret = process.env.TOKEN_SECRET;
            const payload = { username };
            const token = jwt.sign(payload, secret, {'expiresIn': '12h'});
            res.cookie('jwt', token, {'httpOnly': false}).status(200)
                .json({'token': token, 'user': user});
            console.log(token);
        }
    });
});

module.exports = router;