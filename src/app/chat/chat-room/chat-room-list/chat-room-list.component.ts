import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {NgClass, NgOptimizedImage} from "@angular/common";
import {ChatRoomCardComponent} from "../chat-room-card/chat-room-card.component";
import {ChatRoomService} from "../service/chat-room.service";
import {ChatRoomCreationComponent} from "../chat-room-creation/chat-room-creation.component";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {debounceTime, Subject} from "rxjs";
import {ChatRoom} from "../model/chat-room";

@Component({
  selector: 'app-chat-room-list',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ChatRoomCardComponent,
    ChatRoomCreationComponent,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './chat-room-list.component.html',
  styleUrl: './chat-room-list.component.scss'
})
export class ChatRoomListComponent {

  @ViewChild('chatRoomContainer')
  chatRoomContainer!: ElementRef;

  searchDebounceSubject= new Subject<string | null>();

  searchInput = new FormControl('');

  chatRooms = this.chatRoomService.chatRooms;

  @Output()
  selectChatRoomEvent = new EventEmitter<ChatRoom | null>();

  selectedChatRoom: ChatRoom | null = null;

  constructor(private chatRoomService: ChatRoomService) {
    this.searchDebounceSubject.pipe(debounceTime(500))
      .subscribe(input => this.chatRoomService.findChatRooms(input));
  }

  ngOnInit() {
    this.chatRoomService.findChatRooms('');
  }

  search() {
    this.searchDebounceSubject.next(this.searchInput.value)
  }

  resetSearchInput() {
    this.searchInput.reset();
    this.chatRoomService.findChatRooms('');
    this.chatRoomContainer.nativeElement.scrollTop = 0;
  }

  selectChatRoom(chatRoom: ChatRoom) {
    this.selectedChatRoom = this.selectedChatRoom === chatRoom ? null : chatRoom;
    this.selectChatRoomEvent.emit(this.selectedChatRoom);
  }
}
