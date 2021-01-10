import { Action } from '@ngrx/store';
import { Hero } from '../hero';

export enum appActionTypes {
  GET_HEROES = '[GetHeroes] Get Heroes',
  GET_HEROES_FAILURE = '[GetHeroes] Get Heroes failure',
  GET_HEROES_SUCCESS = '[GetHeroes] Get Heroes success',

  UPDATE_HERO = '[UpdateHero] Update Hero',
  UPDATE_HERO_FAILURE = '[UpdateHero] Update Hero failure',
  UPDATE_HERO_SUCCESS = '[UpdateHero] Update Hero success',

  DELETE_HERO = '[DeleteHero] Delete Hero',
  DELETE_HERO_FAILURE = '[DeleteHero] Delete Hero failure',
  DELETE_HERO_SUCCESS = '[DeleteHero] Delete Hero success',

  SEARCH_HEROES = '[SearchHeroes] Search Heroes',
  SEARCH_HEROES_FAILURE = '[SearchHeroes] Search Heroes failure',
  SEARCH_HEROES_SUCCESS = '[SearchHeroes] Search Heroes success',

  GET_MESSAGES = '[GetMessages] Get Messages',
  GET_MESSAGES_FAILURE = '[GetMessages] Get Messages failure',
  GET_MESSAGES_SUCCESS = '[GetMessages] Get Messages success',
  
  ADD_MESSAGE = '[AddMessage] Add Message',
  ADD_MESSAGE_FAILURE = '[AddMessage] Add Message failure',
  ADD_MESSAGE_SUCCESS = '[AddMessage] Add Message success',
  
  RESET_MESSAGES = '[ResetMessages] Reset Messages',
  RESET_MESSAGES_FAILURE = '[ResetMessages] Reset Messages failure',
  RESET_MESSAGES_SUCCESS = '[ResetMessages] Reset Messages success',
}

export class GetHeroes implements Action {
  readonly type = appActionTypes.GET_HEROES;
}

export class GetHeroesFailure implements Action {
  readonly type = appActionTypes.GET_HEROES_FAILURE;
  constructor(public payload: any) {}
}

export class GetHeroesSuccess implements Action {
  readonly type = appActionTypes.GET_HEROES_SUCCESS;
  constructor(public payload: Hero[]) {}
}


export class UpdateHero implements Action {
  readonly type = appActionTypes.UPDATE_HERO;
  constructor(public payload: string) {}
}

export class UpdateHeroFailure implements Action {
  readonly type = appActionTypes.UPDATE_HERO_FAILURE;
  constructor(public payload: any) {}
}

export class UpdateHeroSuccess implements Action {
  readonly type = appActionTypes.UPDATE_HERO_SUCCESS;
  constructor(public payload: string) {}
}

export class DeleteHero implements Action {
  readonly type = appActionTypes.DELETE_HERO;
  constructor(public payload: number) {}
}

export class DeleteHeroFailure implements Action {
  readonly type = appActionTypes.DELETE_HERO_FAILURE;
  constructor(public payload: any) {}
}

export class DeleteHeroSuccess implements Action {
  readonly type = appActionTypes.DELETE_HERO_SUCCESS;
  constructor(public payload: number) {}
}

export class SearchHeroes implements Action {
  readonly type = appActionTypes.SEARCH_HEROES;
  constructor(public payload: string) {}
}

export class SearchHeroesFailure implements Action {
  readonly type = appActionTypes.SEARCH_HEROES_FAILURE;
  constructor(public payload: any) {}
}

export class SearchHeroesSuccess implements Action {
  readonly type = appActionTypes.SEARCH_HEROES_SUCCESS;
  constructor(public payload: string) {}
}

export class GetMessages implements Action {
  readonly type = appActionTypes.GET_MESSAGES;
}

export class GetMessagesFailure implements Action {
  readonly type = appActionTypes.GET_MESSAGES_FAILURE;
}

export class GetMessagesSuccess implements Action {
  readonly type = appActionTypes.GET_MESSAGES_SUCCESS;
}

export class AddMessage implements Action {
  readonly type = appActionTypes.ADD_MESSAGE;
}

export class AddMessageFailure implements Action {
  readonly type = appActionTypes.ADD_MESSAGE_FAILURE;
}

export class AddMessageSuccess implements Action {
  readonly type = appActionTypes.ADD_MESSAGE_FAILURE;
}

export class ResetMessages implements Action {
  readonly type = appActionTypes.RESET_MESSAGES;
}

export class ResetMessagesFailure implements Action {
  readonly type = appActionTypes.RESET_MESSAGES_FAILURE;
}

export class ResetMessagesSuccess implements Action {
  readonly type = appActionTypes.RESET_MESSAGES_SUCCESS;
}

export type AppAction =
  | GetHeroes
  | GetHeroesFailure
  | GetHeroesSuccess
  | UpdateHero
  | UpdateHeroFailure
  | UpdateHeroSuccess
  | DeleteHero
  | DeleteHeroFailure
  | DeleteHeroSuccess
  | SearchHeroes
  | SearchHeroesFailure
  | SearchHeroesSuccess
  | GetMessages
  | GetMessagesFailure
  | GetMessagesSuccess
  | AddMessage
  | AddMessageFailure
  | AddMessageSuccess
  | ResetMessages
  | ResetMessagesFailure
  | ResetMessagesSuccess;


export const fromAppActions = {
  GetHeroes,
  GetHeroesFailure,
  GetHeroesSuccess,
  UpdateHero,
  UpdateHeroFailure,
  UpdateHeroSuccess,
  DeleteHero,
  DeleteHeroFailure,
  DeleteHeroSuccess,
  SearchHeroes,
  SearchHeroesFailure,
  SearchHeroesSuccess,
  GetMessages,
  GetMessagesFailure,
  GetMessagesSuccess,
  AddMessage,
  AddMessageFailure,
  AddMessageSuccess,
  ResetMessages,
  ResetMessagesFailure,
  ResetMessagesSuccess
};
