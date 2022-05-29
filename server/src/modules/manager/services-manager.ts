import { AppError } from "../../util/AppError";
import IManager from "./interface-manager";
import ManagerRepository from "./repository-manager";

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
      
    } catch (error) {}
  }
  async create(Manager: IManager): Promise<void | AppError> {
    try {
      const exists = await ManagerRepository.exists(Manager);
      if (exists !== null) {
        return new AppError(409, "usuario já cadastrado");
      }
      await ManagerRepository.create(Manager);
    } catch (error) {
      console.log(error);
      return new AppError(500, "Não foi possivel criar um novo gerente.");
    }
  }
}

export default new ManagerServices();
