import express from "express";
import { getAll, getById } from "../controllers/benefitsController.ts";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getById);

export default router;
