import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FriendsStore } from '../new-stuff/services/friends.store';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,

  imports: [],
  template: `
    <h1>Your Dashboard</h1>

    <p>You have {{ store.numberOfFriends() }} friends.</p>
  `,
  styles: ``,
})
export class HomeComponent {
  store = inject(FriendsStore);
}
