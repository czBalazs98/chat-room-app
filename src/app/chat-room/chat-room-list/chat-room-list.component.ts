import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {ChatRoom} from "../model/chat-room";
import {ChatRoomCardComponent} from "../chat-room-card/chat-room-card.component";

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

  chatRooms: ChatRoom[] = [
    {
      name: 'World of Warcraft',
      description: 'World of Warcraft related chat',
      tags: ['wow', 'gaming', 'blizzard', 'pc']
    },
    {
      name: 'Angular',
      description: 'Angular related chat room',
      tags: ['angular', 'frontend', 'css', 'html', 'programming', 'tech', 'assssssdfffffdsaaasdffffffffdsaaaaaaaasdffdsafdsa']
    }
  ];
}
