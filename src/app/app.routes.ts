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
      import('./meals/meals.routes').then((c) => c.MEAL_ROUTES),
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
    path: '**',
    redirectTo: 'home',
  },
];
