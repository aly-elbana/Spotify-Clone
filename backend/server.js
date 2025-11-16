import dotenv from "dotenv";
import app from "./src/app.js";
import { connectDb } from "./src/lib/db.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

// Connect to database
connectDb();

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Server URL: http://localhost:${PORT}`);
});