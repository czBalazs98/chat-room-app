import {Injectable, signal} from '@angular/core';
import {Auth, User, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "@angular/fire/auth";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user = signal<User | null>(null);
  user = this._user.asReadonly();

  constructor(private auth: Auth, private router: Router) {
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
        this.router.navigate(['chat-room']);
      });
  }

  logOut() {
    signOut(this.auth).then(response => {
      this._user.set(null);
      this.router.navigate(['login']);
    });
  }
}
