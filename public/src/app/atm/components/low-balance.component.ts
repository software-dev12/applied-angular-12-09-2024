import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AtmStore } from '../services/atm.store';

@Component({
  selector: 'app-low-balance',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    @if (store.atAlertLevel()) {
      <div role="alert" class="alert alert-warning">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <span>Your Account Is Running Low On Funds</span>
      </div>
    }
  `,
  styles: ``,
})
export class LowBalanceComponent {
  store = inject(AtmStore);
}
