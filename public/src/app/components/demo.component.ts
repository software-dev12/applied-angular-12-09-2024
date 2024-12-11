import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-demo',

  imports: [],
  template: `
    <p>{{ current() }}</p>

    @if (isEven()) {
      <p>That is an even number</p>
    } @else {
      <p>That is an odd number</p>
    }

    <button (click)="decrement()" class="btn btn-warning">-</button>
    <button (click)="increment()" class="btn btn-primary">+</button>
    <button (click)="current.set(0)" class="btn btn-primary">RESET</button>
  `,
  styles: ``,
})
export class DemoComponent {
  current = signal(0);

  isEven = computed(() => this.current() % 2 === 0);

  increment() {
    this.current.update((c) => (c += 1));
  }

  decrement() {
    this.current.update((c) => (c -= 1));
  }
}
