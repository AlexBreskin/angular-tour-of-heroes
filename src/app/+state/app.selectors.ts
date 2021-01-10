import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.reducers';

const getState = createFeatureSelector<AppState>('app');

const getHeroes = createSelector(
    getState,
    state => state.heroes 
);

const getHero = createSelector(
    getState,
    state => state.selectedHero
);

const getFilteredHeroes = createSelector(
    getState,
    state => state.heroes.slice(1, 5)
);

const getMessages = createSelector(
    getState,
    state => state.messages
);

export const appQuery = {
    getHeroes,
    getHero,
    getFilteredHeroes,
    getMessages,
  };