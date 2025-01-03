import express, { Express } from "express";
import dotenv from "dotenv";
import pino from "pino";
import pinoHttp from "pino-http";
import cors from "cors";
const responseTime = require("response-time");
const redis = require("redis");
import benefitsRouter from "./routes/benefitsRouter";

dotenv.config();

export const redisClient = redis.createClient({
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
});

redisClient
  .on("error", (err: Error) => console.log("Redis Client Error", err))
  .connect();

export const logger = pino({
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
let corsOptions = {
  origin: ["http://localhost:3000"],
};

app.use(cors(corsOptions));
//Routes
app.use("/benefits", benefitsRouter);

app.listen(port, () => {
  logger.info(`[server]: Server is running at http://localhost:${port}`);
});

app.use(responseTime());
