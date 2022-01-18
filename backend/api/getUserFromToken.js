const express = require("express");
const userModel = require("../models/UserModel.js");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");


dotenv.config()

const router = express.Router();

router.post('/', (req, res) => {
    const {token}= req.body;
    console.log(token);
    let user = jwt.verify(token, process.env.TOKEN_SECRET);
    console.log(user)
    if (user) {
        userModel.findOne({username: user.username}, async (err, user) => {
            if (err) {
                res.status(500).send('Server error!!!!!!!');
            } else if (!user) {
                res.status(400).send('User with this username does not exist');
            } else {
                res.status(200).send({user: user})
                }
            })
    }
}
)

module.exports = router;