import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FriendListComponent } from './components/friend-list.component';

@Component({
  selector: 'app-stuff',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FriendListComponent],
  template: `
    <p>Meal Trading</p>
    <app-friend-list />
  `,
  styles: ``,
})
export class NewStuffComponent {}
