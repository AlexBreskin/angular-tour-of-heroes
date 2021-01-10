import { GetHeroes, HeroAction, heroActionTypes, messageActionTypes } from './app.actions';
import { environment } from '../../environments/environment';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';


export interface HeroState {
  heroes: Hero[]
}

export const HeroInitialState: HeroState = {
  heroes: HEROES
}

export interface MessageState {
  messages: string[]
}

export const MessageInitialState: MessageState = {
  messages: []
}

export function heroReducer(
  state: HeroState = HeroInitialState,
  action: HeroAction
): HeroState {
  switch (action.type)
  {
    case heroActionTypes.GET_HEROES: {
      return {
        ...state
      };
    }
    //Nothing for Get Heroes Failure yet
    case heroActionTypes.GET_HEROES_SUCCESS: {
      return {
        ...state,
        heroes: [...state.heroes].concat(action.payload)
      };
    }
    case heroActionTypes.DELETE_HERO: {
      return {
        
      }
    }
  }
}

export function messageReducer(
  action: GetHeroes
): HeroState {
  switch (action.type)
  {
    case messageActionTypes.GET_MESSAGES: {
      return {
        
      }
    }
  }
}