import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Testowy Przepis',
            'To jest przepis testowy super skladniki i wykonanie',
            'https://upload.wikimedia.org/wikipedia/commons/1/18/Salami_aka.jpg',
            'Salami, Peperoni, Oregano'),
        new Recipe(
            'Testowy Przepis 2',
            'To jest przepis testowy super skladniki i wykonanie',
            'https://upload.wikimedia.org/wikipedia/commons/1/18/Salami_aka.jpg',
            'Makaron, Pomidor, Ser')
      ];
      
      getRecipes(){
            return this.recipes.slice();
      }

      getRecipe(index: number) {
            return this.recipes[index];
      }
}