const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        try{
            const user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({ message: 'User already exists' });
            }
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            const newUser = new User({ name, email, password: hashedPassword });
            await newUser.save();
            const payload = {
                user: {
                    id: newUser._id
                }
            };
            jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
                if (err) throw err;
                res.status(201).json({ token });
            });
        } catch (error) {
            res.status(500).json({ message: 'Something went wrong' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        try {
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ message: 'User does not exist' });
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ message: 'Incorrect password' });
            }
            const payload = {
                user: {
                    id: user._id
                }
            };
            jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
                if (err) throw err;
                res.status(200).json({ token });
            });
        } catch (error) {
            res.status(500).json({message: 'Something went wrong'});
        }
    }catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
}

module.exports = { register, login };