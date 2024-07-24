const jwt = require('jsonwebtoken');
const User = require('../models/userModel');


const verifyToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};

const checkAdminRole = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);
        if (user.isAdmin !== false && user.isAdmin !== 'false') {
            return res.status(403).json({ message: 'Access denied, admin only' });
        }
        next();
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    verifyToken,
    checkAdminRole
};
