import { CurrencyPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal
} from '@angular/core';
import { AtmStore } from '../services/atm.store';

@Component({
  selector: 'app-atm-withdrawal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CurrencyPipe],
  template: `
    <div class="grid grid-flow-col columns-3 gap-4">
      @for (amount of amounts(); track amount) {
        @if (store.balance() < amount) {
          <div class="w-24 h-24 bg-gray-400 text-black font-bold">
            {{ amount | currency }}
          </div>
        } @else {
          <button
            (click)="store.withdraw(amount)"
            class="w-24 h-24 bg-green-400 text-black font-bold"
          >
            {{ amount | currency }}
          </button>
        }
      }
    </div>
  `,
  styles: ``,
})
export class WithdrawComponent {
  store = inject(AtmStore);

  amounts = signal([10, 20, 50, 100]);
}
