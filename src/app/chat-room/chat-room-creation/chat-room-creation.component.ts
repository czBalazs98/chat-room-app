import {Component} from '@angular/core';
import {DialogModule} from "primeng/dialog";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {FormFieldComponent} from "../../common/form-field/form-field.component";
import {FormFieldDirective} from "../../common/form-field/form-field.directive";

@Component({
  selector: 'app-chat-room-creation',
  standalone: true,
  imports: [DialogModule, FormFieldComponent, ReactiveFormsModule, FormFieldDirective],
  templateUrl: './chat-room-creation.component.html',
  styleUrl: './chat-room-creation.component.scss'
})
export class ChatRoomCreationComponent {

  visible: boolean = false;

  chatRoomForm = this.fb.group({
    name: ['', Validators.required],
    description: ['']
  });

  constructor(private fb: FormBuilder) {
  }

  openChatRoomCreationDialog() {
    this.visible = true;
  }

}
