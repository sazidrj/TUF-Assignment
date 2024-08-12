import dotenv from "dotenv";
dotenv.config({});

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./utils/db.js";
import bannerRoute from "./routes/banner.route.js";

const app = express();

app.use(bodyParser.json()); // To parse JSON request bodies

app.get("/", (req, res) => {
  return res.status(202).json({
    message: "I am coming from backend",
    success: true,
  });
});

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));

app.use("/", bannerRoute);

app.listen(3000, () => {
  connectDB();
  console.log("Server is running on port 3000");
});
