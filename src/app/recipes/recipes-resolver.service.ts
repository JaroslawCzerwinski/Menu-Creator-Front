import { Injectable } from "@angular/core";
import {
    Resolve,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from "@angular/router";

import { Recipe } from "./recipe.model";
import { DtataStorageService } from "../shared/data-storage.service";
import { RecipeService } from "./recipe.service";

@Injectable()
export class RecipesResolverService implements Resolve<Recipe[]> {

    constructor(private dataStorageService: DtataStorageService, private recipesServie: RecipeService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const recipes = this.recipesServie.getRecipes();
        if(recipes.length === 0){
            return this.dataStorageService.loadRecipes();
        } else {
            return recipes;
        }
    }
}