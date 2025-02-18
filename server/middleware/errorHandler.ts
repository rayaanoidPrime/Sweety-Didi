import { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/ApiError";
import { StatusCodes } from "http-status-codes";
import { config } from "../config";
import { logger } from "../utils/logger";

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let error = err;

  if (!(error instanceof ApiError)) {
    const statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
    const msg = error.message || "Something went wrong";
    error = new ApiError(statusCode, msg);
  }

  const response = {
    success: false,
    message: error.message || "Something went wrong",
    ...(config.nodeEnv === "development" && { stack: error.stack }), // Include stack trace in development
  };

  if (!(error as ApiError).isOperational) {
    logger.error(error);
  }

  res.status((error as ApiError).statusCode).json(response);
};

export { errorHandler };
