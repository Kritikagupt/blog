import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import Connection from "./database/db.js";
import Router from "./routes/route.js";

dotenv.config();

const app = express();

app.use("/", Router);
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 7000;

app.listen(PORT, () =>
  console.log(`Server is runing successfully on PORT ${PORT}`),
);
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);
