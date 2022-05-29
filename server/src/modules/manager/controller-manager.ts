import Express, { Request, Response } from "express";
import { AppError } from "../../util/AppError/index";
import Imanager from "./interface-manager";

interface ImanagerController {
  create(req: Request, res: Response): Promise<Response>;
  find(req: Request, res: Response): Promise<Response>;
}

class ManagerController implements ImanagerController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      let Manager: Imanager = req.body;
      return res.status(200).json({ ok: true });
    } catch (error) {
      return res.status(500).json(new AppError());
    }
  }
  async find(req: Request, res: Response): Promise<Response> {
    throw new Error("Method not implemented.");
  }
}

export default new ManagerController();
