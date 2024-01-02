import {Component} from '@angular/core';
import {FormFieldDirective} from "../../common/form-field/form-field.directive";
import {FormFieldComponent} from "../../common/form-field/form-field.component";
import {FooterComponent} from "../../common/footer/footer.component";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../service/auth.service";
import {ErrorLabelDirective} from "../../common/form-field/error-label.directive";
import {NgClass} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-login-view',
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
  templateUrl: './login-view.component.html',
  styleUrl: './login-view.component.scss'
})
export class LoginViewComponent {

  constructor(private fb: FormBuilder, private authService: AuthService) {
  }

  loginForm = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    }
  );

  login() {
    if (this.loginForm.valid) {
      this.authService.logIn(this.loginForm.get('email')!.value!, this.loginForm.get('password')!.value!);
    } else {
      this.loginForm.get('email')!.markAsDirty();
      this.loginForm.get('password')!.markAsDirty();
    }
  }

}
