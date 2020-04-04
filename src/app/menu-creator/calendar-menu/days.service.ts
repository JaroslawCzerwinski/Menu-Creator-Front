import { Injectable } from "@angular/core";

import { Day } from "./day.model";
import { RecipeService } from "../../recipes/recipe.service";

@Injectable()
export class DaysService {

      constructor(private recipeService: RecipeService){
      }

      private days: Day[] = [
            new Day(
                  'Poniedziałek',
                  this.recipeService.getRecipe(0),
                  null,
                  this.recipeService.getRecipe(1),
            ),
            new Day(
                  'Wtorek',
                  this.recipeService.getRecipe(3),
                  this.recipeService.getRecipe(2),
                  null
            ),
            new Day(
                  'Środa',
                  this.recipeService.getRecipe(6),
                  this.recipeService.getRecipe(7),
                  this.recipeService.getRecipe(3),
            ),
            new Day(
                  'Czwartek',
                  this.recipeService.getRecipe(4),
                  this.recipeService.getRecipe(2),
                  null
            ),
            new Day(
                  'Piątek',
                  null,
                  this.recipeService.getRecipe(6),
                  null
            )

      ];

      getDays() {
            return this.days.slice();
      }

      getDay(index: number) {
            return this.days[index];
      }
}