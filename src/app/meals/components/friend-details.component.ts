import {
  Component,
  ChangeDetectionStrategy,
  input,
  inject,
  effect,
} from '@angular/core';
import { FriendsStore } from '../services/friends.store';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-friend-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [JsonPipe],
  template: `
    <p>Details of friend with the ID {{ id() }}</p>
    @if (friend()) {
      <pre>{{ friend() | json }}</pre>
    } @else {
      <p>Four Oh Four</p>
    }
  `,
  styles: ``,
})
export class FriendDetailsComponent {
  id = input.required<string>();

  store = inject(FriendsStore);

  friend = this.store.selectedFriendInfo;
  constructor() {
    effect(() => {
      // only used in a constructor (or other "injection context")
      if (this.id()) {
        this.store.setSelectedFriend(this.id()); // this won't work.
      }
    });
  }
}
