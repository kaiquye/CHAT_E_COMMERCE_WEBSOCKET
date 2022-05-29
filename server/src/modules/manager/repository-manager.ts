import connection from "../../config/connectionMyssql";
import IManager from "./interface-manager";

interface Read<T> {
  find(): Promise<T[]>;
  findAll(): Promise<T[]>;
  exists(manager: IManager): Promise<null | any[]>;
}

interface Write<T> {
  create(manager: IManager): Promise<void | any[]>;
  delete(): Promise<void | any[]>;
  update(): Promise<void | any[]>;
}

type repository<T> = Read<T> & Write<T>;

class ManagerRepository implements repository<IManager> {
  async find(): Promise<IManager[]> {
    throw new Error("Method not implemented.");
  }
  async findAll(): Promise<IManager[]> {
    throw new Error("Method not implemented.");
  }
  async exists(manager: IManager): Promise<any[] | null> {
    const response = await connection("manager")
      .select("id", "email")
      .where("email", manager.email)
      .orWhere("phone", manager.phone);
    if (response[0] == undefined) {
      return null;
    }
    return response;
  }
  async create(manager: IManager): Promise<void | any[]> {
    return connection("manager").insert(manager);
  }
  async delete(): Promise<void | any[]> {
    throw new Error("Method not implemented.");
  }
  async update(): Promise<void | any[]> {
    throw new Error("Method not implemented.");
  }
}

export default new ManagerRepository();
