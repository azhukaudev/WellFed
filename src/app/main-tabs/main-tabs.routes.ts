import { Routes } from '@angular/router';

import { MainTabsPage } from './main-tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: MainTabsPage,
    children: [
      {
        path: 'today',
        loadComponent: () => import('../today/today.page').then((m) => m.TodayPage),
      },
      {
        path: 'history',
        loadComponent: () => import('../history/history.page').then((m) => m.HistoryPage),
      },
      {
        path: 'plan',
        loadComponent: () => import('../plan/plan.page').then((m) => m.PlanPage),
      },
      {
        path: 'profile',
        loadComponent: () => import('../profile/profile.page').then((m) => m.ProfilePage),
      },
      {
        path: '',
        redirectTo: '/today',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/today',
    pathMatch: 'full',
  },
];
