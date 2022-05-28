import Imessage from "./websocket_interface";

interface Reader<T> {
  message: T[];
  findAll(): T[];
  findByRoom(): T[];
}

interface Write<T> {
  newMessage(message: T): void;
}

type WebSocketRepository<T> = Reader<T> & Write<T>;

class WebSocketData implements WebSocketRepository<Imessage> {
  message: Imessage[] = [];

  findAll(): Imessage[] {
    throw new Error("Method not implemented.");
  }
  findByRoom(): Imessage[] {
    throw new Error("Method not implemented.");
  }
  newMessage(message: Imessage): void {
    this.message.push(message);
  }
}

export default new WebSocketData();
