import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CounterStore } from '../services/counter.store';

@Component({
  selector: 'app-counter-prefs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div class="join">
      @for (val of store.byValues(); track val) {
        <button
          (click)="store.changeCountBy(val)"
          [disabled]="store.by() === val"
          class="btn join-item"
        >
          Count By {{ val }}
        </button>
      }
    </div>
  `,
  styles: ``,
})
export class PrefsComponent {
  store = inject(CounterStore);
}
