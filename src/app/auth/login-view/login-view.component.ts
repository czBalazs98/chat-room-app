import {Component} from '@angular/core';
import {FormFieldDirective} from "../../common/form-field/form-field.directive";
import {FormFieldComponent} from "../../common/form-field/form-field.component";
import {FooterComponent} from "../../common/footer/footer.component";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-login-view',
  standalone: true,
  imports: [
    FormFieldDirective,
    FormFieldComponent,
    FooterComponent,
    ReactiveFormsModule
  ],
  templateUrl: './login-view.component.html',
  styleUrl: './login-view.component.scss'
})
export class LoginViewComponent {

  constructor(private fb: FormBuilder, private authService: AuthService) {
  }

  loginForm = this.fb.group(
    {
      email: ['', Validators.required],
      password: ['', Validators.required],
    }
  );

  login() {
    if (this.loginForm.valid) {
      this.authService.logIn(this.loginForm.get('email')!.value!, this.loginForm.get('password')!.value!)
    }
  }

}
