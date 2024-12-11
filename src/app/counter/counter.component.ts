import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterOutlet],
  template: `
    <div>Counter Stuff Goes Here</div>

    <div class="flex gap-12">
      <a routerLink="ui" class="btn btn-primary btn-sm">UI</a>
    </div>

    <div class="p-12">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: ``,
})
export class CounterComponent {}