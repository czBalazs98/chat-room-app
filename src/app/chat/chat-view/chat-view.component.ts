import {Component, ElementRef, ViewChild} from '@angular/core';
import {ChatRoomCardComponent} from "../chat-room/chat-room-card/chat-room-card.component";
import {ChatRoomCreationComponent} from "../chat-room/chat-room-creation/chat-room-creation.component";
import {NgOptimizedImage} from "@angular/common";
import {ChatRoomListComponent} from "../chat-room/chat-room-list/chat-room-list.component";
import {ChatMessage} from "../chat-messages/model/chat-message";
import {ChatMessageCardComponent} from "../chat-messages/chat-message-card/chat-message-card.component";
import {ChatRoom} from "../chat-room/model/chat-room";
import {ChatMessageService} from "../chat-messages/service/chat-message.service";
import {FormBuilder, FormControl, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "../../auth/service/auth.service";

@Component({
  selector: 'app-chat-view',
  standalone: true,
  imports: [
    ChatRoomCardComponent,
    ChatRoomCreationComponent,
    NgOptimizedImage,
    ChatRoomListComponent,
    ChatMessageCardComponent,
    ReactiveFormsModule
  ],
  templateUrl: './chat-view.component.html',
  styleUrl: './chat-view.component.scss'
})
export class ChatViewComponent {

  @ViewChild('messageContainer')
  messageContainer!: ElementRef;

  selectedChatRoom: ChatRoom | null = null;

  messageForm = this.fb.group({message: ''});

  chatMessages = this.chatMessageService.messages;

  constructor(private chatMessageService: ChatMessageService, private authService: AuthService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.chatMessageService.join();
  }

  ngAfterViewInit() {
    this.scrollToBottom();
  }

  selectChatRoom(chatRoom: ChatRoom | null) {
    this.selectedChatRoom = chatRoom;
    console.log(this.selectedChatRoom);
  }

  scrollToBottom() {
    const messageContainerElement = this.messageContainer.nativeElement;
    messageContainerElement.scrollTop = messageContainerElement.scrollHeight;
  }

  sendMessage() {
    const messageText = this.messageForm.get('message')!.value;
    if (messageText) {
      let chatMessage: ChatMessage = {
        message: messageText,
        sender: this.authService.getCurrentUsername(),
        chatRoomId: 1
      };
      this.chatMessageService.sendMessage(chatMessage);
      this.messageForm.get('message')!.reset();
    }
  }
}
