import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
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
          @for (link of listOfLinks(); track link.href) {
            <li>
              <a [routerLink]="[link.href]">{{ link.text }}</a>
            </li>
          }
        </ul>
      </div>
    </div>
  `,
  styles: ``,
})
export class HeaderComponent {
  listOfLinks = signal([
    {
      text: 'Welcome',
      href: 'welcome',
    },
    {
      text: 'Meals',
      href: 'meals',
    },
    {
      text: 'Counter',
      href: 'counter',
    },
  ]);
}
