import express from "express";
import morgan from "morgan";
import cors from "cors";
import { apiRouter } from "./api";
import { config } from "./config";
import { errorHandler } from "./api/middleware/errorHandler";

const { port, nodeEnv } = config;
const app = express();

// Middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", apiRouter);

// Error handling middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running in ${nodeEnv} mode on port ${port}`);
});
