import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { addEntity, removeEntity, withEntities } from '@ngrx/signals/entities';
import { computed } from '@angular/core';
import { Friend } from '../types';

type FriendsState = {
  selectedFriend: Friend | undefined;
};
export const FriendsStore = signalStore(
  withState<FriendsState>({
    selectedFriend: undefined,
  }),
  withEntities<Friend>(),
  withComputed((store) => {
    // this spot coming soon.
    return {
      numberOfFriends: computed(() => store.entities().length),
    };
  }),
  withMethods((store) => {
    return {
      setSelectedFriend: (friend: Friend) =>
        patchState(store, { selectedFriend: friend }),
      addFriend: (name: string) => {
        const friendToAdd: Friend = {
          name,
          id: crypto.randomUUID(),
        };
        patchState(store, addEntity(friendToAdd));
      },
      unFriend: () => {
        if (store.selectedFriend() !== undefined) {
          const id = store.selectedFriend()?.id || '';
          patchState(store, removeEntity(id));
        }
      },
    };
  }),
);
