import { Socket } from "socket.io";
import Imessage from "./websocket_interface";
import WebsocketData from "./websocket_data";

class WebSocketServices {
  private io;

  constructor(socket: Socket) {
    this.io = socket;
    this.Events();
  }

  private Events(): void {
    this.io.on("nova_sala", (data: Imessage) => {
      this.io.join(data.sala);
      let message = WebsocketData.findByRoom(data);
      console.log(message)
      this.io.to(data.sala).emit("sala_mensagens", message);
    });

    this.io.on("nova_mensagem", (data: Imessage) => {
      console.log(data)
      WebsocketData.newMessage(data);
    });
    // buscar mensagens por sala
  }
}

export default WebSocketServices;
