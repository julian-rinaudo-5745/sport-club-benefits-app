"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const pino_1 = __importDefault(require("pino"));
const pino_http_1 = __importDefault(require("pino-http"));
const benefitsRouter_1 = __importDefault(require("./routes/benefitsRouter"));
dotenv_1.default.config();
const logger = (0, pino_1.default)({
    transport: {
        target: "pino-pretty",
        options: {
            colorize: true,
            levelFirst: true,
            translateTime: "SYS:standard",
        },
    },
});
const loggerMiddleware = (0, pino_http_1.default)({
    logger,
    customLogLevel: (req, res, err) => {
        if (res.statusCode >= 500)
            return "error";
        if (res.statusCode >= 400)
            return "warn";
        return "info";
    },
    customSuccessMessage: (req, res) => `Request to ${req.url} was successful`,
    customErrorMessage: (req, res, err) => `Request to ${req.url} failed: ${err.message}`,
});
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(loggerMiddleware);
//Routes
app.use("/benefits", benefitsRouter_1.default);
app.listen(port, () => {
    logger.info(`[server]: Server is running at http://localhost:${port}`);
});
