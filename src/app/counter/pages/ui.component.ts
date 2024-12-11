import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
} from '@angular/core';

@Component({
  selector: 'app-counter-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>
      <button
        [disabled]="decrementDisabled()"
        (click)="decrement()"
        class="btn btn-primary"
      >
        -
      </button>
      <span data-testid="current">{{ current() }}</span>
      <button (click)="increment()" class="btn btn-primary">+</button>
    </div>
    <div>
      <p>{{ fizzBuzz() }}</p>
    </div>
  `,
  styles: ``,
})
export class UiComponent {
  current = signal(0);
  textToDisplay = signal('');

  increment() {
    this.current.update((r) => r + 1);
    this.fizzBuzz();
  }

  decrement() {
    this.current.update((r) => r - 1);
    this.fizzBuzz();
  }

  decrementDisabled = computed(() => this.current() === 0);

  fizzBuzz = computed(() => {
    const current = this.current();
    if (current === 0) return '';
    if (current % 3 === 0 && current % 5 === 0) return 'FizzBuzz';
    if (current % 3 === 0) return 'Fizz';
    if (current % 5 === 0) return 'Buzz';
    return '';
  });
}
