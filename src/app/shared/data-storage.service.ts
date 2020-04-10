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
    urlRecipes: string = 'https://menu-creator-back.firebaseio.com/recipes.json';

    constructor(
        private http: HttpClient,
        private recipesService: RecipeService,
        private daysService: DaysService) { }

    loadDays() {
        return this.http.get<Day[]>(this.urlDays).pipe(
            map((loadeDays) => {
                console.log(loadeDays);
                return loadeDays = loadeDays.filter(function (days) {
                    return days != undefined || days != null;
                })
            }),
            map((days) => {
                if (days != null) {
                    return days.map(day => {
                        return day = new Day(new Date(day.date), day.recipes || [])
                    });
                } else {
                    return days = this.daysService.initDays();
                }
            }),
            tap(days => {
                console.log(days);
                this.daysService.setDays(days);
            }),
        );
    }

    storeDays() {
        const days = this.daysService.getAllDays();
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