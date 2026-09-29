const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => {
    res.json({
        message: "DejaVu Audit backend is running",
        status: "success",
    });
});

// Profile API
app.get("/api/profile", (req, res) => {
    res.json({
        id: 1,
        name: "Mahitha",
        email: "mahitha@example.com",
        role: "Administrator",
        avatar: null,
    });
});

// Notifications API
app.get("/api/notifications", (req, res) => {
    res.json([
        {
            id: 1,
            title: "Security Audit Completed",
            message: "Your security audit has been completed successfully.",
            type: "success",
            read: false,
            time: "2 hours ago",
        },
        {
            id: 2,
            title: "New Memory Cluster",
            message: "A new memory cluster has been created.",
            type: "info",
            read: false,
            time: "5 hours ago",
        },
    ]);
});

// Logout API
app.post("/api/logout", (req, res) => {
    res.json({
        message: "Logged out successfully",
        status: "success",
    });
});

app.listen(PORT, () => {
    console.log(`DejaVu Audit backend running on http://localhost:${PORT}`);
});