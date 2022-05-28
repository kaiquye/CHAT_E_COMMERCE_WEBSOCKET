import Imessage from "./websocket_interface";

interface Reader<T> {
  message: T[];
  findAll(): T[];
  findByRoom(room: T): T[];
}

interface Write<T> {
  newMessage(message: T): void;
}

type WebSocketRepository<T> = Reader<T> & Write<T>;

class WebSocketData implements WebSocketRepository<Imessage> {
  message: Imessage[] = [];

  findAll(): Imessage[] {
    return this.message;
  }
  findByRoom(message: Imessage): Imessage[] {
    let messages_by_room = this.message.filter(
      (messages) => messages.sala == message.sala
    );
    return messages_by_room;
  }
  newMessage(message: Imessage): void {
    this.message.push(message);
  }
}

export default new WebSocketData();
