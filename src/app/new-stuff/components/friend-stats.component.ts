import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-friend-stats',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div class="stats shadow">
      <div class="stat">
        <div class="stat-title">Number of Friends</div>
        <div class="stat-value">{{ numberOfFriends() }}</div>
      </div>
    </div>
  `,
  styles: ``,
})
export class FriendStatsComponent {
  numberOfFriends = input.required<number>();
}
