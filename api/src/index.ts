import express, { Express, Request, Response, Router } from "express";
import dotenv from "dotenv";
import pino from "pino";
import pinoHttp from "pino-http";
import benefitsRouter from "./routes/BenefitsRouter";

dotenv.config();

const logger = pino({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      levelFirst: true,
      translateTime: "SYS:standard",
    },
  },
});

const loggerMiddleware = pinoHttp({
  logger,
  customLogLevel: (req, res, err) => {
    if (res.statusCode >= 500) return "error";
    if (res.statusCode >= 400) return "warn";
    return "info";
  },
  customSuccessMessage: (req, res) => `Request to ${req.url} was successful`,
  customErrorMessage: (req, res, err) =>
    `Request to ${req.url} failed: ${err.message}`,
});

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(loggerMiddleware);

//Routes
app.use("/benefits", benefitsRouter);

app.listen(port, () => {
  logger.info(`[server]: Server is running at http://localhost:${port}`);
});
