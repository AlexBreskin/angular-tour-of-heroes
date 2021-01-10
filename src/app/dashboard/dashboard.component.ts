import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';      
import { Observable } from 'rxjs';
import { Hero } from '../hero';
import {  } from '../+state/app.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes$: Observable<Hero[]>;

  constructor(private store: Store<{ heroes: Hero[] }>) { 
    this.heroes$ = store.select('heroes');
  }

  ngOnInit() {
  }

  getHeroes(): void {
    this.store.dispatch(loadGetHeroes());
    //this.heroService.getHeroes()
    //  .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}