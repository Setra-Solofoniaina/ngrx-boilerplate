import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as S from './';

export interface StateEntity extends EntityState<S.State> {
  state: S.State;
  logs: {
    type: string;
    message: string;
  };
}

export const AppAdapter: EntityAdapter<S.State> = createEntityAdapter<S.State>({
  sortComparer: false,
});

const appReducer = createReducer(
  S.InitialState,
  on(S.Actions.init, (state) => {
    // console.log('initiating');
    return { ...state, dummy: false };
  }),
  on(S.Actions.reset, (state) => S.InitialState),
  on(S.Actions.setdummy, (state, { value }) => ({ ...state, dummy: value }))
);

export function reducer(state: S.State, action: Action) {
  return appReducer(state, action);
}
