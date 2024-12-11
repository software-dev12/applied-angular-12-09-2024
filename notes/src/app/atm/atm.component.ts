import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AtmStore } from './services/atm.store';
import { CurrencyPipe } from '@angular/common';
import { LowBalanceComponent } from './components/low-balance.component';

@Component({
  selector: 'app-atm',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink, CurrencyPipe, LowBalanceComponent],
  template: `
    <app-low-balance />
    <nav>
      <ul>
        <li><a routerLink="deposit">Make a Deposit</a></li>
        @if (store.noFunds() === false) {
          <li><a routerLink="withdrawal">Make a Withdrawl</a></li>
        }
      </ul>
    </nav>
    <p class="text-2xl">Your Balance is {{ store.balance() | currency }}</p>
    <router-outlet />
  `,
  styles: ``,
})
export class AtmComponent {
  store = inject(AtmStore);
}
