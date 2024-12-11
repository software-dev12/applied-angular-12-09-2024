import { CurrencyPipe } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
  inject,
} from '@angular/core';
import { AtmStore } from '../services/atm.store';

@Component({
  selector: 'app-atm-deposit',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CurrencyPipe],
  template: `
    <div class="grid grid-flow-col columns-3 gap-4">
      @for (amount of amounts(); track amount) {
        <button
          (click)="store.deposit(amount)"
          class="w-24 h-24 bg-green-400 text-black font-bold"
        >
          {{ amount | currency }}
        </button>
      }
    </div>
  `,
  styles: ``,
})
export class DepositComponent {
  store = inject(AtmStore);
  balance = signal(10);
  amounts = signal([10, 20, 50, 100, 500, 100]);

  amountAvailable = computed(() => this.balance());

  depositAmount = signal(0);
}
