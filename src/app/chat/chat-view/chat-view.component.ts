import { Component } from '@angular/core';
import {ChatRoomCardComponent} from "../chat-room/chat-room-card/chat-room-card.component";
import {ChatRoomCreationComponent} from "../chat-room/chat-room-creation/chat-room-creation.component";
import {NgOptimizedImage} from "@angular/common";
import {ChatRoomListComponent} from "../chat-room/chat-room-list/chat-room-list.component";

@Component({
  selector: 'app-chat-view',
  standalone: true,
  imports: [
    ChatRoomCardComponent,
    ChatRoomCreationComponent,
    NgOptimizedImage,
    ChatRoomListComponent
  ],
  templateUrl: './chat-view.component.html',
  styleUrl: './chat-view.component.scss'
})
export class ChatViewComponent {

}
