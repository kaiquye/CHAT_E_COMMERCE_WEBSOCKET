import express from "express";
import helmetConfig from "./middlewares/helmet/index";
import corsConfig from "./middlewares/cors/index";

class Server {
  public App;

  constructor() {
    this.App = express();
    this.Middleware();
    this.Routes();
  }

  private Middleware(): void {
    this.App.use(express.json());
    this.App.use(corsConfig());
    this.App.use(helmetConfig());
  }

  private Routes(): void {
    this.App.get("/teste", (req, res) => {
      console.log(req);
    });
  }
}

export default new Server().App;
