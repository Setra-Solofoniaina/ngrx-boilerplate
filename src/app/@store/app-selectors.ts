import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '.';

export const state = createFeatureSelector<State>('app');

export const dummy = createSelector(state, (s) => s.dummy);
