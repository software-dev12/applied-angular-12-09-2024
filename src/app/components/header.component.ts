import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <a routerLink="" class="btn btn-ghost text-xl">Applied Angular</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li><a routerLink="welcome">Welcome</a></li>
          <li><a routerLink="new-stuff">New Stuff</a></li>
        </ul>
      </div>
    </div>
  `,
  styles: ``,
})
export class HeaderComponent {}
