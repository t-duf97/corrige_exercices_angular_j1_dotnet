import { Routes } from '@angular/router';
import { Exercices } from './exercices';
import { Exo1 } from './exo-1/exo-1';
import { Exo2 } from './exo-2/exo-2';
import { Exo3 } from './exo-3/exo-3';

export const EXERCICES_ROUTES: Routes = [
  {
    path: '',
    component: Exercices,
    children: [
      { path: 'exo-1', component: Exo1 },
      { path: 'exo-2', component: Exo2 },
      { path: 'exo-3', component: Exo3 },
    ],
  },
];
