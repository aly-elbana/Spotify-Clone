import { clerkClient } from "@clerk/express";

export const protectRoute = async (req, res, next) => {
    try {
        if (!req.auth || !req.auth.userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized. You must be logged in to access this route."
            });
        }
        next();
    } catch (error) {
        console.error("Error in protectRoute middleware:", error);
        return res.status(500).json({
            success: false,
            message: "Error in protectRoute middleware",
            error: error.message
        });
    }
}

export const requireAdmin = async (req, res, next) => {
    try {
        const currentUser = await clerkClient.users.getUser(req.auth.userId);

        const adminEmails = process.env.ADMIN_EMAILS.split(',').map(email => email.trim());

        const userEmails = currentUser.emailAddresses.map(e => e.emailAddress);
        const isAdmin = userEmails.some(email => adminEmails.includes(email));

        if (!isAdmin) {
            return res.status(403).json({
                success: false,
                message: "You are not authorized to access this resource"
            });
        }

        next();
    } catch (error) {
        console.error("Error in requireAdmin middleware:", error);
        return res.status(500).json({
            success: false,
            message: "Error in requireAdmin middleware",
            error: error.message
        });
    }
}
