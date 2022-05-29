import { AppError } from "../../util/AppError";
import IManager from "./interface-manager";
import ManagerRepository from "./repository-manager";

class ManagerServices {
  async Create(manager: IManager): Promise<void | AppError> {
    try {
      const exists = await ManagerRepository.exists(manager);
      if (exists !== null) {
        return new AppError(409, "usuario já cadastrado");
      }
      await ManagerRepository.create(manager);
    } catch (error) {
      return new AppError(500, "Não foi possivel criar um novo gerente.");
    }
  }
}

export default new ManagerServices();
