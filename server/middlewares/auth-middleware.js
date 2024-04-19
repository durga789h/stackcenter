const jwt = require('jsonwebtoken');
const User = require('../models/auth-model');

const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: "Unauthorized: Token not provided" });
    }

    // Extract the token part after "Bearer "
    const jwtToken = token.replace('Bearer ', '');

    try {
        const decodedToken = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
        const userData = await User.findOne({ email: decodedToken.email }).select({ password: 0 });

        if (!userData) {
            return res.status(401).json({ message: "Unauthorized: User not found" });
        }

        req.user = userData;
        req.token = jwtToken;
        req.userId = userData._id;
        next();
    } catch (error) {
        console.error("Error verifying token:", error);
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
};

module.exports = authMiddleware;
