import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import {
  addEntity,
  removeEntity,
  setEntities,
  withEntities,
} from '@ngrx/signals/entities';
import { Friend } from '../types';
import { computed } from '@angular/core';
import { withDevtools } from '@angular-architects/ngrx-toolkit';

type FriendsState = {
  selectedFriend: string | undefined;
};
export const FriendsStore = signalStore(
  withDevtools('freinds'),
  withState<FriendsState>({
    selectedFriend: undefined,
  }),
  withEntities<Friend>(),
  withComputed((store) => {
    // this spot coming soon.
    return {
      numberOfFriends: computed(() => store.entities().length),
      selectedFriendInfo: computed(() => {
        const id = store.selectedFriend() || '';

        return store.entityMap()[id];
      }),
    };
  }),
  withMethods((store) => {
    return {
      setSelectedFriend: (friend: string) =>
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
          const id = store.selectedFriend() || '';
          patchState(store, removeEntity(id));
        }
      },
    };
  }),
  withHooks({
    onInit(store) {
      const fakeFriends: Friend[] = [
        { id: '1', name: 'Byron' },
        { id: '2', name: 'Jamie' },
        { id: '3', name: 'Michelle' },
      ];
      patchState(store, setEntities(fakeFriends));
    },
  }),
);
