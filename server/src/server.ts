import express from "express";
import helmetConfig from "./middlewares/helmet/index";
import corsConfig from "./middlewares/cors/index";
import socket, { Socket } from "socket.io";
import http from "http";

class Server {
  public server;
  public App;
  public io;

  constructor() {
    this.App = express();
    this.server = http.createServer(this.App);
    this.io = new socket.Server(this.server);
    this.Middleware();
    this.Routes();
  }

  private Middleware(): void {
    this.App.use(express.json());
    this.App.use(corsConfig());
    this.App.use(helmetConfig());
  }

  private Routes(): void {
    this.io.on("connection", (emit) => this.teste(emit));
    this.App.get("/teste", (req, res) => {
      console.log(req);
    });
  }
  
}

export default new Server().server;
