import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from 'rxjs/operators';

import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";


@Injectable()
export class DtataStorageService{

    constructor(private http: HttpClient,
                private recipesService: RecipeService){

    }

    storeRecipes(){
        const recipes = this.recipesService.getRecipes();
        this.http.put('XXX', recipes)
        .subscribe(response => {
            console.log(response);
        });
    }

    loadRecipes(){
        return this.http.get<Recipe[]>('XXX')
        .pipe(
            tap(recipes =>{
                this.recipesService.setRecipes(recipes);
            })
        )
    }
}