import { AppAction, appActionTypes } from './app.actions';
import { environment } from '../../environments/environment';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';


export interface AppState {
  selectedHero: Hero;
  heroes: Hero[];
  messages: string[];
}

export const AppInitialState: AppState = {
  selectedHero: null,
  heroes: HEROES,
  messages: []
}

export function appReducer(
  state: AppState = AppInitialState,
  action: AppAction
): AppState {
  switch (action.type)
  {
    case appActionTypes.GET_HEROES: {
      return {
        ...state
      };
    }
    //Nothing for Get Heroes Failure yet
    case appActionTypes.GET_HEROES_SUCCESS: {
      return {
        ...state,
        heroes: [...state.heroes].concat(action.payload)
      };
    }
    case appActionTypes.DELETE_HERO: {
      return {
        ...state,
        heroes: state.heroes.filter(o => o.id == action.payload)
      }
    }
    default:
      return state;
  }
}