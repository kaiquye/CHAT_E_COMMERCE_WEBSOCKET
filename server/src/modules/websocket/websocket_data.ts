import Imessage from "./websocket_interface";

interface Read<T> {
  messageContainer: T[];
  findAll(): T[];
  findByRoom(room: T): T[];
}

interface Write<T> {
  newMessage(message: T): void;
  delete(message: T): void;
}

type WebSocketRepository<T> = Read<T> & Write<T>;

class WebSocketData implements WebSocketRepository<Imessage> {
  messageContainer: Imessage[] = [];

  findAll(): Imessage[] {
    return this.messageContainer;
  }
  findByRoom(message: Imessage): Imessage[] {
    let messages_by_room = this.messageContainer.filter(
      (messages) => messages.sala == message.sala
    );
    return messages_by_room;
  }
  newMessage(message: Imessage): void {
    this.messageContainer.push(message);
  }

  delete(message: Imessage): void {
    const newMessageContainer = this.messageContainer.filter(
      (messages) => messages.sala !== message.sala
    );
    this.messageContainer = newMessageContainer;
  }
}

export default new WebSocketData();
