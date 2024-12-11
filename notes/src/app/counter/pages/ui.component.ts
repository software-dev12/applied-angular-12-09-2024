import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CounterStore } from '../services/counter.store';

@Component({
  selector: 'app-counter-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>
      <button
        [disabled]="store.decrementDisabled()"
        (click)="store.decrement()"
        class="btn btn-primary"
      >
        -
      </button>
      <span data-testid="current">{{ store.current() }}</span>
      <button (click)="store.increment()" class="btn btn-primary">+</button>
    </div>
    <div>
      @switch (store.fizzBuzz()) {
        @case ('Fizz') {
          <p class="font-bold text-2xl text-green-400">Fizz</p>
        }
        @case ('Buzz') {
          <p class="font-bold text-2xl text-orange-400">Buzz</p>
        }
        @case ('FizzBuzz') {
          <p class="font-bold text-2xl text-green-800 animate-pulse">
            FIZZBUZZ!
          </p>
        }
      }
    </div>
  `,
  styles: ``,
})
export class UiComponent {
  store = inject(CounterStore);
}
