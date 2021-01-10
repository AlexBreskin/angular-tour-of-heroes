import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { appActionTypes } from './app.actions';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Injectable()
export class AppEffects {

  getHeroes$ = createEffect(() => this.actions$.pipe(
      ofType(appActionTypes.GET_HEROES),
      mergeMap(() => this.heroService.getHeroes()
        .pipe(
          map(() => ({ type: appActionTypes.GET_HEROES_SUCCESS })),
          catchError(() => of({ type: appActionTypes.GET_HEROES_FAILURE }))
        ) 
      )
    )
  );

  constructor(
    private actions$: Actions,
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

}
