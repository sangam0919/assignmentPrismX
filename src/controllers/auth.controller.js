import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import users from "../user.js";

const SECRET = "your_secret_key";

export const login = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) return res.status(401).json({ message: "User not found" });

  const isMatch = bcrypt.compareSync(password, user.password);
  if (!isMatch) return res.status(401).json({ message: "Wrong password" });

  const token = jwt.sign({ id: user.id, username: user.username }, SECRET, { expiresIn: "1h" });
  res.json({ message: "로그인이 완료되었습니다", token });
};