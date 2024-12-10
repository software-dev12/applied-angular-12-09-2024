import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { FriendListComponent } from './components/friend-list.component';
import { FriendStatsComponent } from './components/friend-stats.component';
import { FriendsStore } from './services/friends.store';

@Component({
  selector: 'app-stuff',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FriendListComponent, FriendStatsComponent],
  template: `
    <p>Meal Trading</p>
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
  `,
  styles: ``,
})
export class NewStuffComponent {
  store = inject(FriendsStore);
}
