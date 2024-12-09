import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome.component';
import { NewStuffComponent } from './new-stuff/new-stuff.component';

export const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'new-stuff',
    component: NewStuffComponent,
  },
];
