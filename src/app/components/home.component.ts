import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,

  imports: [],
  template: ` <h1>Your Dashboard</h1> `,
  styles: ``,
})
export class HomeComponent {}
