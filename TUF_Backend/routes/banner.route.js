import express from "express";
import {
  createBanner,
  updateBanner,
  getBanner,
} from "../controller/banner.controller.js";
const router = express.Router();

router.post("/banner", createBanner);
router.put("/banner/:id", updateBanner);
router.get("/banner/:id", getBanner); // Add the get route

export default router;
