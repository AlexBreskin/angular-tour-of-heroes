import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';      
import { Observable } from 'rxjs';
import { appActionTypes } from '../+state/app.actions';
import { appQuery } from '../+state/app.selectors';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes$: Observable<Hero[]>;

  constructor(private store: Store<{ heroes: Hero[] }>) { 
  }
  
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes$ = this.store.pipe(select(appQuery.getHeroes));
  }

  add(name: string): void {
    /*name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });*/
  }

  delete(hero: Hero): void {
    /*this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();*/
  }
}
