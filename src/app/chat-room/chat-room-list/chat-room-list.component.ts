import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {ChatRoom} from "../model/chat-room";
import {ChatRoomCardComponent} from "../chat-room-card/chat-room-card.component";
import {ChatRoomService} from "../service/chat-room.service";
import {find} from "rxjs";

@Component({
  selector: 'app-chat-room-list',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ChatRoomCardComponent
  ],
  templateUrl: './chat-room-list.component.html',
  styleUrl: './chat-room-list.component.scss'
})
export class ChatRoomListComponent {

  chatRooms = this.chatRoomService.chatRooms;

  constructor(private chatRoomService: ChatRoomService) {
  }

  ngOnInit() {
    this.findChatRooms();
  }

  findChatRooms() {
    this.chatRoomService.findChatRooms();
  }
}
