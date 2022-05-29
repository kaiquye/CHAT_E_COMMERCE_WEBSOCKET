import express from "express";
import helmetConfig from "./middlewares/helmet/index";
import corsConfig from "./middlewares/cors/index";
import socket, { Socket } from "socket.io";
import WebSocketServices from "./modules/websocket/websocket_services";
import http from "http";
import routesManager from "./modules/manager/routes-manager";

class Server {
  public server;
  public App;
  public io;

  constructor() {
    this.App = express();
    this.server = http.createServer(this.App);
    this.io = new socket.Server(this.server);
    this.Middleware();
    this.WebSocket();
    this.Routes();
  }

  private Middleware(): void {
    this.App.use(express.json());
    this.App.use(corsConfig());
    this.App.use(helmetConfig());
  }

  private WebSocket(): void {
    this.io.on("connection", (emit) => new WebSocketServices(emit, this.io));
  }

  private Routes(): void {
    this.App.use("/gerente", routesManager);
  }
}

export default new Server().server;
