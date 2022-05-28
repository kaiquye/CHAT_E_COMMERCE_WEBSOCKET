import { Socket } from "socket.io";
import Imessage from "./websocket_interface";
import WebsocketData from "./websocket_data";

class WebSocketServices {
  io: Socket;

  constructor(socket: Socket) {
    this.io = socket;
    this.Room();
    this.Message();
  }

  private Room(): void {
    this.io.on("nova_sala", (data: Imessage) => {
      this.io.join(data.sala);
      this.io.to(data.sala).emit("sala_mensagens", WebsocketData.findByRoom(data));
    });
  }

  private Message(): void {
    this.io.on("nova_mensagem", (data: Imessage) => {
      console.log(data);
      WebsocketData.newMessage(data);
      this.io.to(data.sala).emit('sala_mensagens',  WebsocketData.findByRoom(data))
    });
  }
}

export default WebSocketServices;
