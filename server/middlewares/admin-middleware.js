const adminMiddleware = async (req, res, next) => {
    try {
        // Extract user object from the request
        const user = req.user;

        // Check if user is an admin
        const isAdmin = user.isAdmin;
        
        if (!isAdmin) {
            return res.status(403).json({ message: "Access denied. User is not an admin." });
        }

        // If user is admin, proceed to the next middleware or route handler
        next();
    } catch (error) {
        next(error);
    }
};

module.exports = adminMiddleware;
