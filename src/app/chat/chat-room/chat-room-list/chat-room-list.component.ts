import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {ChatRoomCardComponent} from "../chat-room-card/chat-room-card.component";
import {ChatRoomService} from "../service/chat-room.service";
import {ChatRoomCreationComponent} from "../chat-room-creation/chat-room-creation.component";
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-chat-room-list',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ChatRoomCardComponent,
    ChatRoomCreationComponent,
    ReactiveFormsModule
  ],
  templateUrl: './chat-room-list.component.html',
  styleUrl: './chat-room-list.component.scss'
})
export class ChatRoomListComponent {

  @ViewChild('chatRoomContainer')
  chatRoomContainer!: ElementRef;

  searchInput = new FormControl('');

  chatRooms = this.chatRoomService.chatRooms;

  constructor(private chatRoomService: ChatRoomService) {
  }

  ngOnInit() {
    this.findChatRooms();
  }

  findChatRooms() {
    this.chatRoomService.findChatRooms(this.searchInput.value);
  }

  resetSearchInput() {
    this.searchInput.reset();
    this.findChatRooms();
    this.chatRoomContainer.nativeElement.scrollTop = 0;
  }
}
