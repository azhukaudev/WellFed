import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./main-tabs/main-tabs.routes').then((m) => m.routes),
  },
];
