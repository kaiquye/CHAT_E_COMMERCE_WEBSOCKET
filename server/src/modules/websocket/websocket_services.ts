import { Socket } from "socket.io";
import Imessage from "./websocket_interface";

class WebSocketServices {
  private io;

  constructor(socket: Socket) {
    this.io = socket;
    this.Events();
  }

  private Events(): void {
    this.io.on("novo_sala", (data: Imessage) => {
      console.log(data);
      this.io.join(data.sala);
      this.io
        .to(data.sala)
        .emit("nova_sala_criada", "nova sala criada", data.sala);
    });
  }
}

export default WebSocketServices;
