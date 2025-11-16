import { User } from "../models/users.model.js";

export const authCallback = async (req, res) => {
    try {
        const { id, firstName, lastName, imageUrl } = req.body;
        const user = await User.findOne({ clerkId: id });
        if (!user) {
            const newUser = await User.create({
                clerkId: id,
                fullName: `${firstName} ${lastName}`,
                imageUrl,
            });
            return res.status(201).json({
                success: true,
                message: "User created successfully",
                user: newUser,
            });
        }
        return res.status(200).json({
            success: true,
            message: "User authenticated successfully",
            user: user,
        });
    } catch (e) {
        return res.status(500).json({
            success: false,
            message: "Error authenticating user",
            error: e.message,
        });
    }
}