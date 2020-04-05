import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap} from 'rxjs/operators';

import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../auth/auth.service";
import { DaysService } from "../menu-creator/days.service";
import { Day } from "../menu-creator/day.model";


@Injectable()
export class DtataStorageService {


    constructor(
        private http: HttpClient,
        private recipesService: RecipeService,
        private daysService: DaysService) { }

    loadDays() {
        return this.http.get<Day[]>(
            'https://menu-creator-back.firebaseio.com/days.json',
        ).pipe(
            tap(days => {
                this.daysService.setDays(days);
            })
        );
    }

    storeDays() {
        const days = this.daysService.getDays();
        this.http.put(
            'https://menu-creator-back.firebaseio.com/days.json',
            days)
            .subscribe(response => {
                console.log(response);
            });
    }

    storeRecipes() {
        const recipes = this.recipesService.getRecipes();
        this.http.put(
            'https://menu-creator-back.firebaseio.com/recipes.json',
            recipes)
            .subscribe(response => {
                console.log(response);
            });
    }

    loadRecipes() {
        return this.http.get<Recipe[]>(
            'https://menu-creator-back.firebaseio.com/recipes.json',
        ).pipe(
            tap(recipes => {
                this.recipesService.setRecipes(recipes);
            })
        );
    }
}