import {Component} from '@angular/core';
import {DialogModule} from "primeng/dialog";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {FormFieldComponent} from "../../common/form-field/form-field.component";
import {FormFieldDirective} from "../../common/form-field/form-field.directive";
import {ChipsModule} from "primeng/chips";
import {NgClass} from "@angular/common";
import {ErrorLabelDirective} from "../../common/form-field/error-label.directive";

@Component({
  selector: 'app-chat-room-creation',
  standalone: true,
  imports: [DialogModule, FormFieldComponent, ReactiveFormsModule, FormFieldDirective, ChipsModule, NgClass, ErrorLabelDirective],
  templateUrl: './chat-room-creation.component.html',
  styleUrl: './chat-room-creation.component.scss'
})
export class ChatRoomCreationComponent {

  visible: boolean = false;

  chatRoomForm = this.fb.group({
    name: ['', Validators.required],
    description: [''],
    rules: [[]],
    tags: [[]]
  });

  constructor(private fb: FormBuilder) {
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
      console.log(this.chatRoomForm.value);
    }
  }

}