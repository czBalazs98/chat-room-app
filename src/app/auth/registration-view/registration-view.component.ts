import {Component} from '@angular/core';
import {ErrorLabelDirective} from "../../common/form-field/error-label.directive";
import {FormFieldComponent} from "../../common/form-field/form-field.component";
import {FormFieldDirective} from "../../common/form-field/form-field.directive";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../service/auth.service";
import {FooterComponent} from "../../common/footer/footer.component";
import {NgClass} from "@angular/common";
import {RouterLink} from "@angular/router";
import {matchFieldsValidator} from "../match-fields-validator";
import {CreateUserRequest} from "../create-user-request";

@Component({
  selector: 'app-registration-view',
  standalone: true,
  imports: [
    FormFieldDirective,
    FormFieldComponent,
    FooterComponent,
    ReactiveFormsModule,
    ErrorLabelDirective,
    NgClass,
    RouterLink
  ],
  templateUrl: './registration-view.component.html',
  styleUrl: './registration-view.component.scss'
})
export class RegistrationViewComponent {

  registrationForm = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      displayName: ['', Validators.required],
      password: ['', Validators.required],
      passwordAgain: ['', Validators.required],
    },
    {
      validators: matchFieldsValidator('password', 'passwordAgain'),
    }
  );

  constructor(private fb: FormBuilder, private authService: AuthService) {
  }

  register() {
    if (this.registrationForm.valid) {
      const createUserRequest: CreateUserRequest = {
        email: this.registrationForm.get('email')!.value!,
        username: this.registrationForm.get('displayName')!.value!,
        password: this.registrationForm.get('password')!.value!,
      }
      this.authService.register(createUserRequest);
    } else {
      this.registrationForm.get('email')!.markAsDirty();
      this.registrationForm.get('displayName')!.markAsDirty();
      this.registrationForm.get('password')!.markAsDirty();
      this.registrationForm.get('passwordAgain')!.markAsDirty();
    }
  }
}
