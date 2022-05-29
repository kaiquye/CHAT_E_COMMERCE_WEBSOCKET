import Express, { Request, Response } from "express";
import ManagerServices from "./services-manager";
import { AppError } from "../../util/AppError/index";
import Imanager from "./interface-manager";

interface ImanagerController {
  create(req: Request, res: Response): Promise<Response>;
  login(req: Request, res: Response): Promise<Response>;
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
      const created: void | AppError = await ManagerServices.Create(Manager);
      if (created instanceof AppError) {
        return res.status(Number(created.status)).json(created.getAppErro());
      }
      return res
        .status(200)
        .json({ ok: true, message: "gerente cadastrado com sucesso." });
    } catch (error) {
      return res.status(500).json(new AppError().getAppErro());
    }
  }
  async login(req: Request, res: Response): Promise<Response> {
    try {
      let Manager: Imanager = req.body;
      const token: string | AppError = await ManagerServices.login(Manager);
    } catch (error) {
      return res.status(500).json(new AppError().getAppErro());
    }
  }
}

export default new ManagerController();
