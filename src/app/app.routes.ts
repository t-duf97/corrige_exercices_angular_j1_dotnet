import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./home/home').then((m) => m.Home),
  },
  {
    path: 'exercices',
    loadChildren: () =>
      import('./exercices/exercices.routes').then((m) => m.EXERCICES_ROUTES),
  },
];
