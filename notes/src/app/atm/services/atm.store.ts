import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';

export const AtmStore = signalStore(
  withState({ balance: 0 }),
  withComputed((store) => {
    return {
      atAlertLevel: computed(() => store.balance() <= 20),
      noFunds: computed(() => store.balance() === 0),
    };
  }),
  withMethods((store) => {
    return {
      deposit: (amount: number) =>
        patchState(store, { balance: store.balance() + amount }),
      withdraw: (amount: number) =>
        patchState(store, { balance: store.balance() - amount }),
    };
  }),
);
