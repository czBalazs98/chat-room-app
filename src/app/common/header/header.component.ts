import {Component} from '@angular/core';
import {AuthService} from "../../auth/service/auth.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  user = this.authService.user;

  constructor(private authService: AuthService) {
  }

  logOut() {
    this.authService.logOut();
  }

}
