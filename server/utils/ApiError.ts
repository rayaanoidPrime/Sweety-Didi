import StatusCodes from "http-status-codes";

export class ApiError extends Error {
  statusCode: number;
  isOperational: boolean;

  constructor(
    statusCode: number,
    message: string,
    isOperational = true,
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }

  static badRedquest(msg: string) {
    return new ApiError(StatusCodes.BAD_REQUEST, msg);
  }

  static notFound(msg: string) {
    return new ApiError(StatusCodes.NOT_FOUND, msg);
  }

  static unauthorized(msg: string) {
    return new ApiError(StatusCodes.UNAUTHORIZED, msg);
  }

  static forbidden(msg: string) {
    return new ApiError(StatusCodes.FORBIDDEN, msg);
  }
  static internal(msg: string) {
    return new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, msg);
  }
}
