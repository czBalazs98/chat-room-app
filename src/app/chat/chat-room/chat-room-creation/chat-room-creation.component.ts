import {Component, EventEmitter, Output} from '@angular/core';
import {DialogModule} from "primeng/dialog";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {ChipsModule} from "primeng/chips";
import {NgClass} from "@angular/common";
import {ChatRoomService} from "../service/chat-room.service";
import {ChatRoom} from "../model/chat-room";
import {ErrorLabelDirective} from "../../../common/form-field/error-label.directive";
import {FormFieldDirective} from "../../../common/form-field/form-field.directive";
import {FormFieldComponent} from "../../../common/form-field/form-field.component";

@Component({
  selector: 'app-chat-room-creation',
  standalone: true,
  imports: [DialogModule, FormFieldComponent, ReactiveFormsModule, FormFieldDirective, ChipsModule, NgClass, ErrorLabelDirective],
  templateUrl: './chat-room-creation.component.html',
  styleUrl: './chat-room-creation.component.scss'
})
export class ChatRoomCreationComponent {

  visible: boolean = false;

  @Output()
  chatRoomCreated = new EventEmitter<void>();

  chatRoomForm = this.fb.group({
    name: ['', Validators.required],
    description: [''],
    rules: [''],
    tags: [null]
  });

  constructor(private fb: FormBuilder, private chatRoomService: ChatRoomService) {
  }

  openChatRoomCreationDialog() {
    this.chatRoomForm.reset();
    this.visible = true;
  }

  closeChatRoomCreationDialog() {
    this.visible = false;
  }

  saveChatRoom() {
    this.chatRoomForm.get('name')!.markAsDirty();

    if (this.chatRoomForm.valid) {
      this.chatRoomService.saveChatRoom(<ChatRoom>this.chatRoomForm.value)
        .subscribe(response => this.chatRoomCreated.emit());
      this.visible = false;
    }
  }

}
