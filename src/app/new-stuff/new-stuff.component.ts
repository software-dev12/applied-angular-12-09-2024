import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { FriendListComponent } from './components/friend-list.component';
import { Friend } from './types';

@Component({
  selector: 'app-stuff',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FriendListComponent],
  template: `
    <p>Meal Trading</p>
    <app-friend-list
      [peopleToList]="friends()"
      (personSelected)="selectedFriend.set($event)"
    />
    @if (selectedFriend() !== undefined) {
      <p>You selected {{ selectedFriend()?.name }}</p>
      <button class="btn btn-danger" (click)="unfriend()">
        Unfriend This Person?
      </button>
    }
  `,
  styles: ``,
})
export class NewStuffComponent {
  selectedFriend = signal<Friend | undefined>(undefined);
  friends = signal<Friend[]>([
    { id: '1', name: 'Bob Smith' },
    { id: '2', name: 'Jill Smith' },
    { id: '3', name: 'Ray Palmer' },
    { id: '4', name: 'Stacey Gonzalez' },
  ]);

  unfriend() {
    if (this.selectedFriend()) {
      this.friends.update((f) =>
        f.filter((f) => f.id !== this.selectedFriend()?.id),
      );
    }
    this.selectedFriend.set(undefined);
  }
}
