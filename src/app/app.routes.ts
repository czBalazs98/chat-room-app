import {Routes} from '@angular/router';
import {AuthGuard, redirectLoggedInTo, redirectUnauthorizedTo} from "@angular/fire/auth-guard";

const redirectToLoginView = () => redirectUnauthorizedTo(['login']);
const redirectToLoggedInView = () => redirectLoggedInTo(['chat']);

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/chat',
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
    path: 'registration',
    loadComponent: () => import('./auth/registration-view/registration-view.component')
      .then(mod => mod.RegistrationViewComponent),
    canActivate: [AuthGuard],
    data: {authGuardPipe: redirectToLoggedInView}
  },
  {
    path: 'chat',
    loadComponent: () => import('./chat/chat-view/chat-view.component')
      .then(mod => mod.ChatViewComponent),
    canActivate: [AuthGuard],
    data: {authGuardPipe: redirectToLoginView}
  }
];
