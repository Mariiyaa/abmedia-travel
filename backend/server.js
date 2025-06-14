// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Mock routes
const destinationRoutes = require("./routes/destinations");
const packageRoutes = require("./routes/packages");

const app = express();
app.use(cors());
app.use(express.json());



app.use("/api/destinations", destinationRoutes);
app.use("/api/packages/top-selling", packageRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
