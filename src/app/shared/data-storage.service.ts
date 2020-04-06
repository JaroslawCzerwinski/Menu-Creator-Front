import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap, map } from 'rxjs/operators';

import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { DaysService } from "../menu-creator/days.service";
import { Day } from "../menu-creator/day.model";


@Injectable()
export class DtataStorageService {

    urlDays: string = 'https://menu-creator-back.firebaseio.com/days.json';
    urlRecipes: string ='https://menu-creator-back.firebaseio.com/recipes.json';

    constructor(
        private http: HttpClient,
        private recipesService: RecipeService,
        private daysService: DaysService) { }

    loadDays() {
        return this.http.get<Day[]>(this.urlDays).pipe(
            map((days) => {
                console.log(days);
              return days.map(day => new Day(day.date, day.recipes || []));
            }),
            tap(days => {
                console.log(days);
              this.daysService.setDays(days);
            }),
          );
    }

    storeDays() {
        const days = this.daysService.getDays();
        this.http.put(
            this.urlDays,
            days)
            .subscribe(response => {
            });
    }

    storeRecipes() {
        const recipes = this.recipesService.getRecipes();
        this.http.put(
            this.urlRecipes,
            recipes)
            .subscribe(response => {
            });
    }

    loadRecipes() {
        return this.http.get<Recipe[]>(
            this.urlRecipes,
        ).pipe(
            tap(recipes => {
                this.recipesService.setRecipes(recipes);
            })
        );
    }
}