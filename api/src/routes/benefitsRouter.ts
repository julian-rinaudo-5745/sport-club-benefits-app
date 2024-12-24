import express from "express";
import { myContainer } from "../inversify.config";
import { BenefitsController } from "../controllers/BenefitsController";
import { TYPES } from "../types";

const router = express.Router();

const benefitsController = myContainer.get<BenefitsController>(
  TYPES.BenefitsController
);

router.get("/", (req, res) => benefitsController.getAll(req, res));
router.get("/:id", (req, res) => benefitsController.getById(req, res));

export default router;
