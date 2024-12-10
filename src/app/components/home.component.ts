import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,

  imports: [],
  template: `
    <h1>Your Dashboard</h1>

    <!-- <p>You have {{ store.numberOfFriends() }} friends.</p> -->
  `,
  styles: ``,
})
export class HomeComponent {}
