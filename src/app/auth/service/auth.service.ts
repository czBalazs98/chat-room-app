import {Injectable, signal} from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword, getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut, updateProfile,
  User
} from "@angular/fire/auth";
import {Router} from "@angular/router";
import {NzNotificationService} from "ng-zorro-antd/notification";
import {ErrorHandler} from "../error-handler";
import {CreateUserRequest} from "../create-user-request";

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

  register(createUserRequest: CreateUserRequest) {
    createUserWithEmailAndPassword(this.auth, createUserRequest.email, createUserRequest.password)
      .then(user => {
        updateProfile(user.user, {displayName: createUserRequest.username})
          .then(_ => this.router.navigate(['chat']));
      });
  }

  logIn(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then(response => {
        this._user.set(response.user);
        this.router.navigate(['chat']);
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

  getCurrentUsername(): string {
    return this._user()!.displayName ? this._user()!.displayName! : this._user()!.uid;
  }
}
