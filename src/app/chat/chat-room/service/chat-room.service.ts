import {Injectable, signal} from '@angular/core';
import {child, Database, get, ref, set} from "@angular/fire/database";
import {ChatRoom, ChatRoomResponse} from "../model/chat-room";

@Injectable({
  providedIn: 'root'
})
export class ChatRoomService {

  dbRef = ref(this.database);

  private _chatRooms = signal<ChatRoom[]>([]);
  chatRooms = this._chatRooms.asReadonly();

  constructor(private database: Database) { }

  findChatRooms() {
    let response: ChatRoomResponse;
    get(child(this.dbRef, 'chat-rooms'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          response = snapshot.val() as ChatRoomResponse;
          this._chatRooms.set(Object.values(response));
        } else {
          this._chatRooms.set([]);
        }
      }).catch((error) => console.log(error));
  }

  saveChatRoom(chatRoom: ChatRoom) {
    set(ref(this.database, 'chat-rooms/' + this.generateChatRoomId(chatRoom)), chatRoom);
  }

  generateChatRoomId(chatRoom: ChatRoom): string {
    return chatRoom.name.replace(/\s/g, '');
  }
}
