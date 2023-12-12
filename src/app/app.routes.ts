import {Routes} from '@angular/router';
import {AuthGuard, redirectLoggedInTo, redirectUnauthorizedTo} from "@angular/fire/auth-guard";

const redirectToLoginView = () => redirectUnauthorizedTo(['login']);
const redirectToLoggedInView = () => redirectLoggedInTo(['chat-room']);

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/chat-room',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/login-view/login-view.component')
      .then(mod => mod.LoginViewComponent),
    canActivate: [AuthGuard],
    data: {authGuardPipe: redirectToLoggedInView}
  },
  {
    path: 'chat-room',
    loadComponent: () => import('./chat-room/chat-room/chat-room.component')
      .then(mod => mod.ChatRoomComponent),
    canActivate: [AuthGuard],
    data: {authGuardPipe: redirectToLoginView}
  }
];
