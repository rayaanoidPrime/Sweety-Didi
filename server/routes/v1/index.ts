import express from "express";
// import { userRouter } from "./user.route.ts";
// import { postRouter } from "./post.route.ts";
import { healthRouter } from "./health.route";

const router = express.Router();

// router.use("/user", userRouter);
// router.use("/post", postRouter);
router.use("/health", healthRouter);

export { router as v1Router };
