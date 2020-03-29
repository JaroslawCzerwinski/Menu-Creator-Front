import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
      recipeChanged = new Subject<Recipe[]>();

      private recipes: Recipe[] = [
           /* new Recipe(
                  'Testowy Przepis',
                  'To jest przepis testowy super skladniki i wykonanie',
                  'https://upload.wikimedia.org/wikipedia/commons/1/18/Salami_aka.jpg',
                  'Salami, Peperoni, Oregano',
                  0),
            new Recipe(
                  'Testowy Przepis 2',
                  'To jest przepis testowy super skladniki i wykonanie',
                  'https://upload.wikimedia.org/wikipedia/commons/1/18/Salami_aka.jpg',
                  'Makaron, Pomidor, Ser',
                  1),
            new Recipe(
                  'Jajecznica ze szczypiorekim',
                  'Przepis na przygotowanie jajecznicy!',
                  'https://www.mniammniam.com/obrazki_mobile/jajecznica_na_sloninie_mobile.jpg',
                  'Składniki jajecznicy',
                  2),
            new Recipe(
                  'Ryba z frytkami',
                  'Przepis na przygotowanie ryby z frytkami!',
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQNj3pbfQxUYj3qHG98BdqbfVwnIJ9Ja7o4UiUdvOO5662rZFc',
                  'Składniki ryby z frytkami',
                  3),
            new Recipe(
                  'Kanapki z dzemem',
                  'Przepis na dzem!',
                  'https://www.mojegotowanie.pl/media/cache/default_view/uploads/media/default/0001/57/deb8c54dae90038de94f14c4cc031b8202b90fb5.jpeg',
                  'składniki do kolacji',
                  4),
            new Recipe(
                  'Parówki',
                  'Przepis na przygotowanie jajecznicy',
                  'https://www.mojegotowanie.pl/media/cache/default_view/uploads/media/default/0001/57/deb8c54dae90038de94f14c4cc031b8202b90fb5.jpeg',
                  'składniki do jajecznicy',
                  5),
            new Recipe(
                  'Zapiekanki',
                  'Przepis na dzem!',
                  'https://www.mniammniam.com/obrazki_mobile/jajecznica_na_sloninie_mobile.jpg',
                  'składniki do kolacji',
                  6),
            new Recipe(
                  'Kurczak',
                  'Przepis na przygotowanie ryby z frytkami!',
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQNj3pbfQxUYj3qHG98BdqbfVwnIJ9Ja7o4UiUdvOO5662rZFc',
                  'składniki do obiadu',
                  7)*/

      ];

      setRecipes(recipes: Recipe[]){
            this.recipes = recipes;
            this.recipeChanged.next(this.recipes.slice());
      }

      getRecipes() {
            return this.recipes.slice();
      }

      getRecipe(index: number) {
            return this.recipes[index];
      }

      addRecipe(recipe: Recipe){
            this.recipes.push(recipe);
            this.recipeChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe){
            this.recipes[index] = newRecipe;
            this.recipeChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number){
            this.recipes.splice(index, 1);
            this.recipeChanged.next(this.recipes.slice());
      }
}