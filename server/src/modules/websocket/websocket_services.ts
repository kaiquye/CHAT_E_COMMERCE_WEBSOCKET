import { Socket } from "socket.io";
import Imessage from "./websocket_interface";
import WebsocketData from "./websocket_data";
import auth from "../../middlewares/auth";

/**
 * @variation io : instacia do servidor web socket.
 * @method WebsocketData : Gerencia os dados me memoria.
 * @method Room : inicia uma nova sala.
 * @method Message : gerencia todas as mensagens.
 */

class WebSocketServices {
  instaceIo: any;
  io: Socket;

  constructor(socket: Socket, io: any) {
    this.io = socket;
    this.instaceIo = io;
    this.Room();
    this.Message();
    this.FindAll();
  }

  private Room(): void {
    this.io.on("nova_sala", (data: Imessage) => {
      console.log(data);
      this.io.join(data.sala);
      this.instaceIo
        .to(data.sala)
        .emit("sala_mensagens", WebsocketData.findByRoom(data));
    });
  }

  private Message(): void {
    this.io.on("nova_mensagem", (data: Imessage) => {
      console.log(data);
      WebsocketData.newMessage(data);
      this.instaceIo
        .to(data.sala)
        .emit("sala_mensagens", WebsocketData.findByRoom(data));
    });
  }

  // so gerentes tem autorização.
  private FindAll(): void {
    this.io.on("lista_mensagens", (data: Imessage) => {
      if (auth.validadeManagerWebToken(data.authToken)) {
        return this.instaceIo.emit("lista_mensagens", WebsocketData.findAll());
      } else {
        return this.instaceIo.emit("lista_mensagens", {
          status: 401,
          message: "Unauthorized",
        });
      }
    });
  }
}

export default WebSocketServices;
