import {Component} from '@angular/core';
import {AuthService} from "../../auth/service/auth.service";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
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
