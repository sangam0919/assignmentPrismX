import express from "express";
import { earn, balance, history } from "../controllers/point.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/earn", verifyToken, earn);
router.get("/balance", verifyToken, balance);
router.get("/history", verifyToken, history);

export default router;
