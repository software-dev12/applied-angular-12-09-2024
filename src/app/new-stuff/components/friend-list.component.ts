import { Component, ChangeDetectionStrategy } from '@angular/core';

type Friend = { id: string; name: string };
@Component({
  selector: 'app-friend-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    @for (friend of friends; track friend.id) {
      <button (click)="changeIt(friend)">{{ friend.name }}</button>
    }
  `,
  styles: ``,
})
export class FriendListComponent {
  // all data must be a signal or
  // if you really must, an observable
  friends: Friend[] = [
    { id: '1', name: 'Bob Smith' },
    { id: '2', name: 'Jill Smith' },
    { id: '3', name: 'Ray Palmer' },
    { id: '4', name: 'Stacey Gonzalez' },
  ];

  changeIt(friend: Friend) {
    friend.name = friend.name.toUpperCase();
  }
}
