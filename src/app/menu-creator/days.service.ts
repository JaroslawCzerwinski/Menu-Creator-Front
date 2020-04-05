import { Injectable } from "@angular/core";

import { RecipeService } from "../recipes/recipe.service";
import { Day } from "./day.model";

@Injectable()
export class DaysService {

      private startDate: Date = new Date(new Date().getTime());
      private dayLongInMS: number = 86400000;
      private daysShown: Array<Day> = [];

      constructor(private recipeService: RecipeService) {
            this.initDays();
      }

      initDays() {
            let day: Day;
            for (let i = 0; i < 5; i++) {
                  day = new Day(new Date(this.startDate.getTime() + this.dayLongInMS * i), null, null, null);
                  this.daysShown.push(day);
            }
      }

      getDays() {
            return this.daysShown.slice();
      }

      showNextDay() {
            const tempDate = new Date((this.daysShown[this.daysShown.length - 1]).getDate().getTime() + this.dayLongInMS);
            this.daysShown.shift();
            this.daysShown.push(new Day(tempDate, null, null, null));
      }
      showPreviousDay() {
            const tempDate = new Date((this.daysShown[0]).getDate().getTime() - this.dayLongInMS);
            this.daysShown.pop();
            this.daysShown.unshift(new Day(tempDate, null, null, null));
      }
}