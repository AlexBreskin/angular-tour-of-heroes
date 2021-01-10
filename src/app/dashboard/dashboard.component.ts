import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';      
import { Observable } from 'rxjs';
import { Hero } from '../hero';
import { appActionTypes } from '../+state/app.actions';
import { appQuery } from '../+state/app.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes$: Observable<Hero[]>;

  constructor(private store: Store<{ heroes: Hero[] }>) { 
    this.heroes$ = this.store.select(state => state.heroes);
  }

  ngOnInit() {
    this.heroes$ = this.store.pipe(select(appQuery.getFilteredHeroes))
  }
}