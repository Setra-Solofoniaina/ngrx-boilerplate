import { createAction, props } from '@ngrx/store';

export const Actions = {
  init: createAction('[APP] Init'),
  reset: createAction('[APP] Reset'),
  setdummy: createAction(
    '[APP] Action with value set',
    props<{ value: boolean }>()
  ),
};
