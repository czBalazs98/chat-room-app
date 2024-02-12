import {Injectable, signal} from '@angular/core';
import {webSocket, WebSocketSubject} from "rxjs/webSocket";
import {ChatMessage} from "../model/chat-message";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ChatMessageService {

  private _messages = signal<ChatMessage[]>([]);
  messages = this._messages.asReadonly();

  ws: WebSocketSubject<ChatMessage> | null = null;

  constructor(private httpClient: HttpClient) { }

  join(chatRoomId: number) {
    this.ws = webSocket<ChatMessage>('ws://localhost:8080/chat/' + chatRoomId);
    this.ws.subscribe({
      next: msg => this._messages.update(msgs => [...msgs, msg]),
      error: err => console.log(err)
    });
  }

  disconnect() {
    if (this.ws) {
      this.ws.complete();
    }
  }

  sendMessage(chatMessage: ChatMessage) {
    if (this.ws) {
      this.ws.next(chatMessage);
    }
  }

  findMessages(chatRoomId: number) {
    this.httpClient.get<ChatMessage[]>('/api/chat-messages/' + chatRoomId)
      .subscribe(response => this._messages.set(response));
  }
}
