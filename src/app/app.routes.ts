import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome.component';

import { DemoComponent } from './components/demo.component';
import { HomeComponent } from './components/home.component';

export const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'meals',
    loadChildren: () =>
      // we are doing this not to lazy load, but to put it in a separate bundle.
      import('./meals/meals.routes').then((c) => c.MEAL_ROUTES),
  },
  {
    path: 'atm',
    loadChildren: () => import('./atm/atm.routes').then((r) => r.ATM_ROUTES),
  },
  {
    path: 'demo',
    component: DemoComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'counter',
    loadChildren: () =>
      import('./counter/counter.routes').then((r) => r.COUNTER_ROUTES),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
