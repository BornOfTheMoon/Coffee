import express from "express"
import { userModel } from "../models/UserModel.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"


dotenv.config()

const router = express.Router()

router.post('/', async (req, res) => {
    const { username, password } = req.body;
    userModel.findOne({username: username}, async (err, user) => {
        if (err) {
            res.status(500).send('Server error!!!!!!!');
        } else if (!user) {
            res.status(400).send('User with this username does not exist');
        } else {
            const auth = await bcrypt.compare(password, user.hashedPassword)
            if (auth) {
                const secret = process.env.TOKEN_SECRET;
                const payload = { username };
                const token = jwt.sign(payload, secret, {'expiresIn': '12h'});
                console.log(token);
                res.cookie('jwt', token, {'httpOnly': false}).status(200)
                    .json({'success': true, 'token': token, 'message': 'Welcome back!'})
            } else {
                res.status(400).send('Wrong password')
            }
        }}
    )
})

export default router;