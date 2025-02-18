import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import { config } from "./config";
import { v1Router } from "./routes/v1";
// import { errorHandler } from "@/middleware/errorHandler";
// import { limiter } from "@/middleware/rateLimiter";
import { logger } from "./utils/logger";

const app = express();

// Security middleware
app.use(helmet());
app.use(cors());
// app.use(limiter);

// Request parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging
app.use(morgan("dev"));

// API routes
app.use("/api/v1", v1Router);

// Error handling
// app.use(errorHandler);

// Start server
app.listen(config.port, () => {
  logger.info(
    `Server running in ${config.nodeEnv} mode on port ${config.port} - ${config.host}`
  );
});

// Handle uncaught exceptions
process.on("uncaughtException", (error) => {
  logger.error("Uncaught Exception:", error);
  process.exit(1);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (error) => {
  logger.error("Unhandled Rejection:", error);
  process.exit(1);
});
