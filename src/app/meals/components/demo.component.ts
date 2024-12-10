import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
} from '@angular/core';

@Component({
  selector: 'app-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <p>{{ current() }}</p>
    <p id="demo">{{ nonSignalCurrent }}</p>
    @if (isEven()) {
      <p>That is an even number</p>
    } @else {
      <p>That is an odd number</p>
    }
    <button (click)="decrement()" class="btn">-</button>
    <button (click)="increment()" class="btn">+</button>
    <button (click)="current.set(0)" class="btn">RESET</button>
  `,
  styles: ``,
})
export class DemoComponent {
  current = signal(0);
  nonSignalCurrent = 0;
  isEven = computed(() => this.current() % 2 === 0);

  increment() {
    this.current.update((c) => (c += 1));
  }

  decrement() {
    this.current.update((c) => (c -= 1));
  }
}
