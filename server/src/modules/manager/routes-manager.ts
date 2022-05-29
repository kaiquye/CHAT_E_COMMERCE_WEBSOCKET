const { Router } = require("express");
import ManagerController from "./controller-manager";
import Auth from "../../middlewares/auth/index";

class ManagerRoutes {
  App;
  constructor() {
    this.App = Router();
    this.RoutesPublic();
    this.Middleware();
    this.Routes();
  }

  private Middleware(): void {
    this.App.use(Auth.authManager);
  }

  private RoutesPublic() {
    this.App.post("/login", ManagerController.login);
  }

  private Routes(): void {
    this.App.post("/novo", ManagerController.create);
  }
}

export default new ManagerRoutes().App;
