import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { TYPES } from "../types";
import { BenefitsService } from "../services/BenefitsSerivce";
import { logger } from "..";

@injectable()
export class BenefitsController {
  private _service: BenefitsService;

  constructor(
    @inject(TYPES.BenefitsService)
    service: BenefitsService
  ) {
    this._service = service;
  }
  public async getAll(req: Request, res: Response) {
    try {
      const benefits = await this._service.getAll();

      if (benefits.length === 0) {
        res.sendStatus(404);
      }
      res.status(200).send(benefits);
    } catch (error) {
      this.handleError(error as Error, res);
    }
  }
  public async getById(req: Request, res: Response) {
    try {
      if (!req?.params?.id) {
        res.sendStatus(400);
      }
      const benefit = await this._service.getById(Number(req.params.id));

      if (!benefit.id) {
        res.sendStatus(404);
      }

      res.status(200).send(benefit);
    } catch (error) {
      this.handleError(error as Error, res);
    }
  }

  private handleError(error: Error, res: Response) {
    logger.error({
      origin: "BenefitsController",
      message: error.message,
    });

    res.sendStatus(500);
  }
}
