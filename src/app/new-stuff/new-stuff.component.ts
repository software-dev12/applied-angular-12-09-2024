import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FriendCreateComponent } from './components/friend-create.component';
import { FriendListComponent } from './components/friend-list.component';
import { FriendStatsComponent } from './components/friend-stats.component';
import { FriendsStore } from './services/friends.store';

@Component({
  selector: 'app-new-stuff',

  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FriendListComponent, FriendStatsComponent, FriendCreateComponent],
  template: `
    <p>Going out to meals with friends is fun.</p>
    <app-friend-stats [numberOfFriends]="store.numberOfFriends()" />
    <app-friend-list
      [peopleToList]="store.entities()"
      (personSelected)="store.setSelectedFriend($event)"
    />

    @if (store.selectedFriend() !== undefined) {
      <p>You selected {{ store.selectedFriend()?.name }}</p>
      <button class="btn btn-danger" (click)="store.unFriend()">
        Unfriend This Person?
      </button>
    }

    <app-friend-create (personAdded)="store.addFriend($event)" />
  `,
  styles: ``,
})
export class NewStuffComponent {
  store = inject(FriendsStore);
}
