import express from "express";
import { login } from "../controllers/auth.controller.js";

const router = express.Router();

// 로그인 요청 
router.post("/login", login);

export default router;
