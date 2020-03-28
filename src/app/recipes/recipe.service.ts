import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
      recipeChanged = new Subject<Recipe[]>();
      //recipeSelected = new EventEmitter<Recipe>();

      private recipes: Recipe[] = [
            new Recipe(
                  0,
                  'Testowy Przepis',
                  'To jest przepis testowy super skladniki i wykonanie',
                  'https://upload.wikimedia.org/wikipedia/commons/1/18/Salami_aka.jpg',
                  'Salami, Peperoni, Oregano'),
            new Recipe(
                  1,
                  'Testowy Przepis 2',
                  'To jest przepis testowy super skladniki i wykonanie',
                  'https://upload.wikimedia.org/wikipedia/commons/1/18/Salami_aka.jpg',
                  'Makaron, Pomidor, Ser'),
            new Recipe(
                  2,
                  'Jajecznica ze szczypiorekim',
                  'Przepis na przygotowanie jajecznicy!',
                  'https://www.mniammniam.com/obrazki_mobile/jajecznica_na_sloninie_mobile.jpg',
                  'Składniki jajecznicy'),
            new Recipe(
                  3,
                  'Ryba z frytkami',
                  'Przepis na przygotowanie ryby z frytkami!',
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQNj3pbfQxUYj3qHG98BdqbfVwnIJ9Ja7o4UiUdvOO5662rZFc',
                  'Składniki ryby z frytkami'),
            new Recipe(
                  4,
                  'Kanapki z dzemem',
                  'Przepis na dzem!',
                  'https://www.mojegotowanie.pl/media/cache/default_view/uploads/media/default/0001/57/deb8c54dae90038de94f14c4cc031b8202b90fb5.jpeg',
                  'składniki do kolacji'),
            new Recipe(
                  5,
                  'Parówki',
                  'Przepis na przygotowanie jajecznicy',
                  'https://www.mojegotowanie.pl/media/cache/default_view/uploads/media/default/0001/57/deb8c54dae90038de94f14c4cc031b8202b90fb5.jpeg',
                  'składniki do jajecznicy'),
            new Recipe(
                  6,
                  'Zapiekanki',
                  'Przepis na dzem!',
                  'https://www.mniammniam.com/obrazki_mobile/jajecznica_na_sloninie_mobile.jpg',
                  'składniki do kolacji'),
            new Recipe(
                  7,
                  'Kurczak',
                  'Przepis na przygotowanie ryby z frytkami!',
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQNj3pbfQxUYj3qHG98BdqbfVwnIJ9Ja7o4UiUdvOO5662rZFc',
                  'składniki do obiadu')

      ];

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