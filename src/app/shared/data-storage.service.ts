import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { tap, take, exhaustMap } from 'rxjs/operators';

import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../auth/auth.service";


@Injectable()
export class DtataStorageService {

    constructor(private http: HttpClient,
        private recipesService: RecipeService,
        private authService: AuthService) { }

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