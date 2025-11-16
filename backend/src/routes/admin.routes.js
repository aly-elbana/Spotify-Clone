import { Router } from "express";

import { protectRoute, requireAdmin } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", protectRoute, requireAdmin, (req, res) => {
    res.status(200).json({ message: "Admin routes - Placeholder" });
});

export default router;