import express, { Application } from "express";
import cors from "cors";
import { errorMiddleware } from "../middlewares/error.middleware";

export class Express {
  app: Application;
  constructor() {
    this.app = express();
    this.initMiddlewares();
    this.errorMiddleware();
  }

  errorMiddleware() {
    this.app.use(errorMiddleware);
  }

  private initMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors);
  }

  listen() {
    this.app.listen(3333, () => console.log("Server is running on port 3333"));
  }
}
