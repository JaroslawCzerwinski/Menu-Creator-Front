import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Day } from "./day.model";
import { Recipe } from "../recipes/recipe.model";

@Injectable()
export class DaysService {
     

      private startDate: Date = new Date(new Date().getTime());
      private dayLongInMS: number = 86400000;
      private daysShown: Array<Day> = [];
      daysChanged = new Subject<Day[]>();

      getDays() {
            return this.daysShown.slice();
      }

      setDays(days: Day[]) {
            this.daysShown = days;
            this.daysChanged.next(this.daysShown.slice());
        }


      showNextDay() {
            console.log(this.daysShown);
            const tempDate = new Date((this.daysShown[this.daysShown.length - 1]).getDate().getTime() + this.dayLongInMS);
            this.daysShown.shift();
            this.daysShown.push(new Day(tempDate, null, null, null));
            this.daysChanged.next(this.daysShown.slice());
      }
      showPreviousDay() {
            const tempDate = new Date((this.daysShown[0]).getDate().getTime() - this.dayLongInMS);
            this.daysShown.pop();
            this.daysShown.unshift(new Day(tempDate, null, null, null));
            this.daysChanged.next(this.daysShown.slice());
      }
}