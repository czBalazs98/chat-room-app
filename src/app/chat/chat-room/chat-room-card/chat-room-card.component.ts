import {Component, Input} from '@angular/core';
import {NgClass, NgOptimizedImage} from "@angular/common";
import {ChatRoom} from "../model/chat-room";
import {NzToolTipModule} from "ng-zorro-antd/tooltip";

@Component({
  selector: 'app-chat-room-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NzToolTipModule,
    NgClass
  ],
  templateUrl: './chat-room-card.component.html',
  styleUrl: './chat-room-card.component.scss'
})
export class ChatRoomCardComponent {
  @Input({required: true})
  chatRoom!: ChatRoom;

  @Input()
  isSelected: boolean = false;

  getChatRoomTags(): string {
    return this.chatRoom.tags ? this.chatRoom.tags.join(", ") : '';
  }
}
