import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Day } from "./day.model";
import { Recipe } from "../recipes/recipe.model";

@Injectable()
export class DaysService {

      private currentDate: Date = new Date(new Date().getTime());
      private firstDateFromServer;
      private lastDateFromServer;
      private startDate;
      private endDate;
      private dayLongInMS: number = 86400000;
      private daysShown: Array<Day> = [];
      daysChanged = new Subject<Day[]>();

      getDays() {
            return this.daysShown.slice();
      }

      setDays(loadedDays: Day[]) {
            const filledDays = this.fillEmptyDays(loadedDays);
            this.daysShown = loadedDays;
            this.daysChanged.next(this.daysShown.slice());
      }


      private fillEmptyDays(loadedDays: Day[]) {
            this.firstDateFromServer = loadedDays[0].date;
            this.lastDateFromServer = loadedDays[loadedDays.length - 1].date;

            if (this.firstDateFromServer >= this.currentDate) {
                  this.startDate = this.currentDate;
            } else {
                  this.startDate = this.firstDateFromServer;
            }
            if (this.lastDateFromServer >= this.currentDate) {
                  this.endDate = this.lastDateFromServer;
            } else {
                  this.endDate = this.currentDate;
            }

            const daysToFill = (this.endDate.getTime() - this.startDate.getTime()) / this.dayLongInMS;

            this.fillDaysBetwenStartAndEnd(loadedDays, daysToFill);


      }



      fillDaysBetwenStartAndEnd(loadedDays: Day[], daysToFill: number) {
            let daysFilled: Day[];
            console.log('petla sie zaczyna');
            for (let i = 0; i < daysToFill; i++) {
                  if (loadedDays[i] === undefined) {
                        loadedDays[i] = new Day(new Date((loadedDays[i - 1].date).getTime() + this.dayLongInMS));
                  }
                  console.log(loadedDays);
            }
            return daysFilled = loadedDays;
      }
}