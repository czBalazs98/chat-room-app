import {Injectable, signal} from '@angular/core';
import {Database, ref} from "@angular/fire/database";
import {ChatRoom} from "../model/chat-room";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChatRoomService {

  private _chatRooms = signal<ChatRoom[]>([]);
  chatRooms = this._chatRooms.asReadonly();

  constructor(private httpClient: HttpClient) {
  }

  findChatRooms(name: string | null) {
    if (name === null || name.length === 0) {
      this.httpClient.get<ChatRoom[]>('api/chat-rooms')
        .subscribe(response => this._chatRooms.set(response));
    } else {
      this.httpClient.get<ChatRoom[]>(`api/chat-rooms/${name}`)
        .subscribe(response => this._chatRooms.set(response));
    }
  }

  saveChatRoom(chatRoom: ChatRoom): Observable<ChatRoom> {
    return this.httpClient.post<ChatRoom>('api/chat-rooms', chatRoom);
  }
}
