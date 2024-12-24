"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const benefitsController_ts_1 = require("../controllers/benefitsController.ts");
const router = express_1.default.Router();
router.get("/", benefitsController_ts_1.getAll);
// router.get("/:id", getAbout);
exports.default = router;
