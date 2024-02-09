import {Injectable, signal} from '@angular/core';
import {webSocket} from "rxjs/webSocket";
import {ChatMessage} from "../model/chat-message";

@Injectable({
  providedIn: 'root'
})
export class ChatMessageService {

  private _messages = signal<ChatMessage[]>([]);
  messages = this._messages.asReadonly();

  ws = webSocket<ChatMessage>('ws://localhost:8080/chat');

  constructor() { }

  join() {
    this.ws.subscribe({
      next: msg => this._messages.update(msgs => [...msgs, msg]),
      error: err => console.log(err)
    });
  }

  sendMessage(chatMessage: ChatMessage) {
    this.ws.next(chatMessage);
  }
}
