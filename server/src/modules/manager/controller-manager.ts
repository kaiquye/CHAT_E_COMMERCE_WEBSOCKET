import Express, { Request, Response } from "express";
import ManagerServices from "./services-manager";
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
      if (!Manager.email || !Manager.password || !Manager.fistName) {
        return res
          .status(400)
          .json(new AppError(400, "campos invalidos").getAppErro());
      }
      const created = await ManagerServices.Create(Manager);
      if (created instanceof AppError) {
        return res.status(Number(created.status)).json(created.getAppErro());
      }
      return res.status(200).json({ ok: true });
    } catch (error) {
      console.log(error);
      return res.status(500).json(new AppError().getAppErro());
    }
  }
  async find(req: Request, res: Response): Promise<Response> {
    throw new Error("Method not implemented.");
  }
}

export default new ManagerController();
