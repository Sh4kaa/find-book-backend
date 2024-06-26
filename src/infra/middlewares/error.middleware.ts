import { NextFunction, Request, Response } from "express";
import { HttpException } from "../../types/httpException";

export function errorMiddleware(
  err: HttpException,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  return res.status(err.status).json({
    status: 500,
    message: err.message || "Internal server error",
  });
}
