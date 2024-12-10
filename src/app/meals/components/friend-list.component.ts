import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FriendsStore } from '../services/friends.store';

@Component({
  selector: 'app-friend-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <ul>
      @for (friend of store.entities(); track friend.id) {
        <li>
          <button (click)="store.setSelectedFriend(friend)">
            {{ friend.name }}
          </button>
        </li>
      } @empty {
        <p>Sorry, no friends! So Sad!</p>
      }
    </ul>
  `,
  styles: ``,
})
export class FriendListComponent {
  store = inject(FriendsStore);
}
