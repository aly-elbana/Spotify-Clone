import express from "express";
import cors from "cors";
import morgan from "morgan";
import usersRoutes from "./routes/users.routes.js";
import authRoutes from "./routes/auth.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import songsRoutes from "./routes/songs.routes.js";
import albumsRoutes from "./routes/albums.routes.js";
import statsRoutes from "./routes/stats.routes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/songs", songsRoutes);
app.use("/api/v1/albums", albumsRoutes);
app.use("/api/v1/stats", statsRoutes);

// Health check endpoint
app.get("/", (req, res) => {
    res.status(200).json({ message: "Server is running" });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        error: "Route not found",
        method: req.method,
        url: req.url,
    });
});

export default app; 
