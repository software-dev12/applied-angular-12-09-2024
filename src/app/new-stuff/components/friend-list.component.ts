import {
  ChangeDetectionStrategy,
  Component,
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
  peopleToList = input.required<Friend[]>();
  // @Output() personSelected = new EventEmitter<Friend>()
  personSelected = output<Friend>();
  // all data must be a signal or,, if you really must, an observable.
}
