import express from "express";
import { getExample } from "./controller";

const router = express.Router();

router.get("/", getExample);

export const exampleRouter = router;
