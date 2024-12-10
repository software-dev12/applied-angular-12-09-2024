import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome.component';
import { NewStuffComponent } from './new-stuff/new-stuff.component';
import { DemoComponent } from './new-stuff/components/demo.component';
import { HomeComponent } from './components/home.component';

export const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'new-stuff',
    component: NewStuffComponent,
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
