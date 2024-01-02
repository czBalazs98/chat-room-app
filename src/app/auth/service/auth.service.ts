import {Injectable, signal} from '@angular/core';
import {Auth, onAuthStateChanged, signInWithEmailAndPassword, signOut, User} from "@angular/fire/auth";
import {Router} from "@angular/router";
import {NzNotificationService} from "ng-zorro-antd/notification";
import {ErrorHandler} from "../error-handler";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user = signal<User | null>(null);
  user = this._user.asReadonly();

  constructor(private auth: Auth, private router: Router, private notification: NzNotificationService) {
    onAuthStateChanged(this.auth, user => {
      if (user) {
        this._user.set(user);
      }
    });
  }

  logIn(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then(response => {
        this._user.set(response.user);
        this.router.navigate(['chat-room-list']);
      })
      .catch(error => this.notification.error('Error', ErrorHandler.getErrorMessage(error.code),
        {nzPlacement: 'top', nzDuration: 0}));
  }

  logOut() {
    signOut(this.auth).then(response => {
      this._user.set(null);
      this.router.navigate(['login']);
    });
  }
}
