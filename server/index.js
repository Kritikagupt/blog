import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import Connection from "./database/db.js";
import Router from "./routes/route.js";

dotenv.config();

const app = express();

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS middleware
app.use(cors());

// Router middleware
app.use("/", Router);

const PORT = process.env.PORT || 7000; // Use the port defined in environment variables or default to 7000

app.listen(PORT, () => {
  console.log(`Server is running successfully on PORT ${PORT}`);
});

// Connect to the database
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
Connection(USERNAME, PASSWORD);
