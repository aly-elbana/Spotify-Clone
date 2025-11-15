import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
    res.status(200).json({ message: "Auth routes - Placeholder" });
});

export default router;

