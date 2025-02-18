import express from "express";
import { exampleRouter } from "./example/route";

const router = express.Router();

router.use("/example", exampleRouter);

export const apiRouter = router;
