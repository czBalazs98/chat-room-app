import { Component } from '@angular/core';
import {ChatRoomCardComponent} from "../chat-room/chat-room-card/chat-room-card.component";
import {ChatRoomCreationComponent} from "../chat-room/chat-room-creation/chat-room-creation.component";
import {NgOptimizedImage} from "@angular/common";
import {ChatRoomListComponent} from "../chat-room/chat-room-list/chat-room-list.component";
import {ChatMessage} from "../chat-messages/model/chat-message";
import {ChatMessageCardComponent} from "../chat-messages/chat-message-card/chat-message-card.component";

@Component({
  selector: 'app-chat-view',
  standalone: true,
  imports: [
    ChatRoomCardComponent,
    ChatRoomCreationComponent,
    NgOptimizedImage,
    ChatRoomListComponent,
    ChatMessageCardComponent
  ],
  templateUrl: './chat-view.component.html',
  styleUrl: './chat-view.component.scss'
})
export class ChatViewComponent {

  chatMessages: ChatMessage[] = [
    {id: 1, created: new Date(), sender: 'C1JA2AIQ2tZ939l9NbtOa2iZvqs2', message: 'TestMessage', chatRoomId: 1},
    {id: 2, created: new Date(), sender: 'testuser', message: 'TestMessage', chatRoomId: 1},
    {id: 3, created: new Date(), sender: 'C1JA2AIQ2tZ939l9NbtOa2iZvqs2', message: 'TestMessage', chatRoomId: 1},
    {id: 4, created: new Date(), sender: 'C1JA2AIQ2tZ939l9NbtOa2iZvqs2', message: 'TestMessage', chatRoomId: 1},
    {id: 5, created: new Date(), sender: 'testuser', message: 'TestMessage', chatRoomId: 1},
    {id: 6, created: new Date(), sender: 'C1JA2AIQ2tZ939l9NbtOa2iZvqs2', message: 'TestMessage', chatRoomId: 1},
    {id: 7, created: new Date(), sender: 'testuser', message: 'TestMessage', chatRoomId: 1},
    {id: 8, created: new Date(), sender: 'C1JA2AIQ2tZ939l9NbtOa2iZvqs2', message: 'TestMessage', chatRoomId: 1},
    {id: 9, created: new Date(), sender: 'C1JA2AIQ2tZ939l9NbtOa2iZvqs2', message: 'TestMessage', chatRoomId: 1},
    {id: 10, created: new Date(), sender: 'testuser', message: 'TestMessage', chatRoomId: 1}
  ]

}
