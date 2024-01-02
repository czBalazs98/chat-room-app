import {Routes} from '@angular/router';
import {AuthGuard, redirectLoggedInTo, redirectUnauthorizedTo} from "@angular/fire/auth-guard";

const redirectToLoginView = () => redirectUnauthorizedTo(['login']);
const redirectToLoggedInView = () => redirectLoggedInTo(['chat-room']);

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/chat-room-list',
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
    path: 'chat-room-list',
    loadComponent: () => import('./chat-room/chat-room-list/chat-room-list.component')
      .then(mod => mod.ChatRoomListComponent),
    canActivate: [AuthGuard],
    data: {authGuardPipe: redirectToLoginView}
  }
];
