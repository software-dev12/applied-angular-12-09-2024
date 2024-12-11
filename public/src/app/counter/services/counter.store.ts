import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  watchState,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
const BY_VALUES = [1, 3, 5] as const;

export type ByValues = (typeof BY_VALUES)[number];
type CounterState = {
  current: number;
  by: ByValues;
};
export const CounterStore = signalStore(
  withState<CounterState>({
    current: 0,
    by: 1,
  }),
  withMethods((store) => {
    return {
      increment: () =>
        patchState(store, { current: store.current() + store.by() }),
      decrement: () =>
        patchState(store, { current: store.current() - store.by() }),
      changeCountBy: (by: ByValues) => patchState(store, { by }),
    };
  }),
  withComputed((store) => {
    return {
      decrementDisabled: computed(() => store.current() - store.by() < 0),
      byValues: computed(() => BY_VALUES),
      fizzBuzz: computed(() => {
        const current = store.current();
        if (current === 0) {
          return '';
        }
        if (current % 3 === 0 && current % 5 === 0) {
          return 'FizzBuzz';
        }
        if (current % 3 === 0) {
          return 'Fizz';
        }
        if (current % 5 === 0) {
          return 'Buzz';
        }
        return '';
      }),
    };
  }),
  withHooks({
    onInit(store) {
      const saved = localStorage.getItem('counter');
      if (saved !== null) {
        const state = JSON.parse(saved) as unknown as CounterState;
        patchState(store, state);
      }
      watchState(store, (state) => {
        localStorage.setItem('counter', JSON.stringify(state));
      });
    },
  }),
);
