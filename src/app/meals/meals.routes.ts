import { Routes } from '@angular/router';
import { MealsComponent } from './meals.component';
import { FriendListComponent } from './components/friend-list.component';
import { FriendCreateComponent } from './components/friend-create.component';
import { FriendsStore } from './services/friends.store';
import { FriendDetailsComponent } from './components/friend-details.component';

export const MEAL_ROUTES: Routes = [
  {
    path: '', // app routes, 'meals' points to this.
    component: MealsComponent,
    providers: [FriendsStore],
    children: [
      {
        path: 'list', // meals/list
        component: FriendListComponent,
        children: [
          {
            path: ':id', // meals/list/398398
            component: FriendDetailsComponent,
          },
        ],
      },
      {
        path: 'create', // meals/create
        component: FriendCreateComponent,
      },
    ],
  },
];
