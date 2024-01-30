import {Component, Input} from '@angular/core';
import {ChatMessage} from "../model/chat-message";
import {AuthService} from "../../../auth/service/auth.service";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-chat-message-card',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './chat-message-card.component.html',
  styleUrl: './chat-message-card.component.scss'
})
export class ChatMessageCardComponent {

  user = this._authService.user;

  @Input({required: true})
  chatMessage!: ChatMessage;

  constructor(private _authService: AuthService) {
  }

  isOwnMessage(): boolean {
    const displayName = this.user()!.displayName;
    const username = displayName ? displayName : this.user()!.uid;
    return username == this.chatMessage.sender;
  }

  getAvatar(): string {
    const photoUrl = this.user()!.photoURL;

    return photoUrl ? photoUrl : 'assets/images/default-user-icon.svg';
  }
}
