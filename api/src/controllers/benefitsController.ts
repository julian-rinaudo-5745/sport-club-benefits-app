import { Request, Response } from "express";

export const getAll = (req: Request, res: Response) => {
  res.send("Birds home page");
};

export const getById = (req: Request, res: Response) => {
  res.send("About birds " + req.params.id);
};
