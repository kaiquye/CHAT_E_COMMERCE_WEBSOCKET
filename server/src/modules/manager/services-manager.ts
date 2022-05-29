import { AppError } from "../../util/AppError";
import IManager from "./interface-manager";
import ManagerRepository from "./repository-manager";

class ManagerServices {
  async Create(manager: IManager): Promise<void | AppError> {
    try {
        
    } catch (error) {
      return new AppError(500, "Não foi possivel criar um novo gerente.");
    }
  }
}
