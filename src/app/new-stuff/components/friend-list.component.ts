import {
  Component,
  ChangeDetectionStrategy,
  input,
  output,
} from '@angular/core';
import { Friend } from '../types';

@Component({
  selector: 'app-friend-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <ul>
      @for (friend of peopleToList(); track friend.id) {
        <li>
          <button (click)="personSelected.emit(friend)">
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
  // all data must be a signal or
  // if you really must, an observable
  peopleToList = input.required<Friend[]>();
  personSelected = output<Friend>();
}
