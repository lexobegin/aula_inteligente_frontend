import { Routes } from '@angular/router';

import { LayoutComponent } from './shared/components/layout/layout.component';
import { DashboardComponent } from './business/dashboard/dashboard.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { LoginComponent } from './business/authentication/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
//import { authenticatedGuard } from './core/guards/authenticated.guard';

/////
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './core/services/auth.service';
////

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '', // será reemplazado dinámicamente por el redirect guard
    resolve: {
      redirect: () => {
        const authService = inject(AuthService);
        const router = inject(Router);
        const isLoggedIn = authService.isLoggedIn(); // o verifica token en localStorage
        return isLoggedIn
          ? router.parseUrl('/dashboard')
          : router.parseUrl('/login');
      },
    },
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      //Dashboard
      { path: 'dashboard', component: DashboardComponent },

      { path: 'enProceso', component: HeaderComponent },

      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },

  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'dashboard' },
];
