import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./common/header/header.component";
import {FooterComponent} from "./common/footer/footer.component";
import {AuthService} from "./auth/service/auth.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'chat-room-app';

  constructor(public router: Router, public authService: AuthService) {
  }
}
