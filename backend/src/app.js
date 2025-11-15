import express from "express";
import usersRoutes from "./routes/users.routes.js";
import authRoutes from "./routes/auth.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import songsRoutes from "./routes/songs.routes.js";
import albumsRoutes from "./routes/albums.routes.js";
import statsRoutes from "./routes/stats.routes.js";

const app = express();

app.use(express.json());

app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/songs", songsRoutes);
app.use("/api/v1/albums", albumsRoutes);
app.use("/api/v1/stats", statsRoutes);

export default app; 
