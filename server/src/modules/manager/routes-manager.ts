const { Router } = require("express");
import ManagerController from "./controller-manager";

class ManagerRoutes {
  App;
  constructor() {
    this.App = Router();
    this.Routes();
  }

  private Middleware(): void {
    // autenticação
  }

  private Routes(): void {
    this.App.get("/novogerente", ManagerController.create);
  }
}

export default new ManagerRoutes().App;
