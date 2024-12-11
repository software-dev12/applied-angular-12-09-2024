import { Component } from '@angular/core';

import { HeaderComponent } from './components/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <app-header />
    <main class="container mx-auto">
      <router-outlet />
    </main>
  `,
  styles: [],
  imports: [HeaderComponent, RouterOutlet],
})
export class AppComponent {}
