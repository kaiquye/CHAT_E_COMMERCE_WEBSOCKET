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
    this.App.post("/novo", ManagerController.create);
    this.App.post("/login", ManagerController.login);
  }
}

export default new ManagerRoutes().App;
