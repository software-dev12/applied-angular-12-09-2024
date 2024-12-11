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
  `,
  styles: ``,
})
export class UiComponent {
  current = signal(0);

  increment() {
    this.current.update((r) => r + 1);
  }

  decrement() {
    this.current.update((r) => r - 1);
  }

  decrementDisabled = computed(() => this.current() === 0);
}
