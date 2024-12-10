import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FriendStatsComponent } from './components/friend-stats.component';
import { FriendsStore } from './services/friends.store';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-meals',

  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink, FriendStatsComponent, RouterLinkActive],
  template: `
    <div class="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center">
        <app-friend-stats [numberOfFriends]="store.numberOfFriends()" />
        <router-outlet />
        <label
          for="my-drawer-2"
          class="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div class="drawer-side">
        <label
          for="my-drawer-2"
          aria-label="close sidebar"
          class="drawer-overlay"
        ></label>
        <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <!-- Sidebar content here -->
          <li>
            <a routerLink="list" [routerLinkActive]="['ring-2', 'ring-white']"
              >List of Friends</a
            >
          </li>
          <li>
            <a
              routerLink="list"
              [routerLinkActive]="['ring-2', 'ring-white']"
              routerLink="create"
              >Add A Friend</a
            >
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: ``,
})
export class MealsComponent {
  store = inject(FriendsStore);
}
