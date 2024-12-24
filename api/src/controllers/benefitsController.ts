import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { TYPES } from "../types";
import { BenefitsService } from "../services/BenefitsSerivce";

@injectable()
export class BenefitsController {
  private _service: BenefitsService;

  constructor(
    @inject(TYPES.BenefitsService)
    service: BenefitsService
  ) {
    this._service = service;
  }
  public getAll(req: Request, res: Response) {
    res.send("Birds home page");
  }
  public getById(req: Request, res: Response) {
    res.send("About birds " + req.params.id);
  }
}
