import { Injectable } from "@angular/core";

import { RecipeService } from "../recipes/recipe.service";
import { Day } from "./day.model";

@Injectable()
export class DaysService {

      startDate: Date = new Date(new Date().getTime());
      dayLong: number = 86400000;
      private days: Day[] = [];

      constructor(private recipeService: RecipeService) {
                  this.initDays();
      }

      initDays() {
            let day: Day;
            for (let i = 0; i < 5; i++) {
                  day = new Day(new Date(this.startDate.getTime() + this.dayLong * i), null, null, null);
                  this.days.push(day);
            }
            
      }

      getDays() {
            return this.days.slice();
      }

      getDay(index: number) {
            return this.days[index];
      }
}