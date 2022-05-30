import bcrypt from "bcrypt";
import { AppError } from "../../util/AppError";
import IManager from "./interface-manager";
import ManagerRepository from "./repository-manager";
import Auth from "../../middlewares/auth/index";

interface Iservices {
  login(Manager: IManager): Promise<string | AppError>;
  create(Manager: IManager): Promise<void | AppError>;
}

class ManagerServices implements Iservices {
  async login(Manager: IManager): Promise<string | AppError> {
    try {
      const password: null | any[] =
        await ManagerRepository.findByEmailPassword(Manager);
      if (password == null) {
        return new AppError(404, "email/senha invalidos");
      }
      const match = await bcrypt.compare(
        Manager.password.toString(),
        password[0].password
      );
      if (!match) {
        return new AppError(404, "email/senha invalidos");
      }
      const token = Auth.newTokenManager(Manager.email);
      return token;
    } catch (error) {
      console.log(error);
      return new AppError(500, "Não foi possivel fazer login.");
    }
  }
  async create(Manager: IManager): Promise<void | AppError> {
    try {
      const exists = await ManagerRepository.exists(Manager);
      if (exists !== null) {
        return new AppError(409, "usuario já cadastrado");
      }
      const hash = bcrypt.genSaltSync(10);
      const crypt = bcrypt.hashSync(Manager.password.toString(), hash);
      Manager.password = crypt;
      await ManagerRepository.create(Manager);
    } catch (error) {
      console.log(error);
      return new AppError(500, "Não foi possivel criar um novo gerente.");
    }
  }
}

export default new ManagerServices();
