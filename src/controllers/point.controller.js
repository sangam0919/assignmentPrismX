import * as pointService from "../services/point.service.js";

export const earn = (req, res) => {
  const userId = req.user.id;
  const { amount } = req.body;
  const result = pointService.earnPoint(userId, amount);
  res.json("포인트 적립이 완료되었습니다",result);
};

export const balance = (req, res) => {
  const userId = req.user.id;
  const result = pointService.getBalance(userId);
  res.json("잔액 조회를 하셨습니다",result);
};

export const history = (req, res) => {
  const userId = req.user.id;
  const result = pointService.getHistory(userId);
  res.json("계정의 내역 조회를 하셨습니다",result);
};
