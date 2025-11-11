import express from "express";
import { earn, balance, history } from "../controllers/point.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

// 포인트 받기 요청 
router.post("/earn", verifyToken, earn);
// 마일리즈 조회 
router.get("/balance", verifyToken, balance);
// 내역 조회 
router.get("/history", verifyToken, history);

export default router;
