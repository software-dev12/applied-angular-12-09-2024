import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-stuff',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `<p>New Stuff Here</p>`,
  styles: ``,
})
export class NewStuffComponent {}
