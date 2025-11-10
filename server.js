import express from "express";
import authRouter from "./src/routers/auth.router.js";
import pointRouter from "./src/routers/point.router.js";

const app = express();
app.use(express.json());

app.use("/api", authRouter);
app.use("/api", pointRouter);

app.get("/", (req, res) => res.send("Server is running"));

app.listen(3000, () => console.log("Server on~ localhost:3000"));
