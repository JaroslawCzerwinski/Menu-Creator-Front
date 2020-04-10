import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Day } from "./day.model";
import { Recipe } from "../recipes/recipe.model";

@Injectable()
export class DaysService {

      private currentDate: Date = new Date(new Date().getTime());
      private dayLongInMS: number = 86400000;
      private daysToShow: Array<Day> = [];
      private allDays: Array<Day> = [];
      daysChanged = new Subject<Day[]>();

      initDays() {
            let initDays: Day[] = [];
            for (let i = 0; i < 5; i++) {
                  initDays[i] = new Day(new Date((this.currentDate.getTime() + i * this.dayLongInMS)));
            }
            return initDays;
      }

      getDays() {
            console.log(this.daysToShow);
            return this.daysToShow.slice();
      }

      getAllDays() {
            return this.daysToShow.slice();
      }

      setDays(loadedDays: Day[]) {
            this.allDays = this.fillEmptyDays(loadedDays);
            this.daysToShow = this.showFiveActualDays(this.allDays);
            console.log(this.daysToShow);
            this.daysChanged.next(this.daysToShow.slice());
      }

      showFiveActualDays(allDays: Day[]) {
            const currentDateIndex = allDays.findIndex(day => day.date.getDay() == this.currentDate.getDay());
            return allDays.slice(currentDateIndex, currentDateIndex + 5);
      }

      private fillEmptyDays(loadedDays: Day[]) {
            const additionalDays = 4;
            const firstDateFromServer = loadedDays[0].date;
            const lastDateFromServer = loadedDays[loadedDays.length - 1].date;
            let startDate: Date;
            let endDate: Date;

            if (firstDateFromServer >= this.currentDate) {
                  startDate = this.currentDate;
                  loadedDays.unshift(new Day(new Date(this.currentDate)));
            } else {
                  startDate = firstDateFromServer;
            }
            if (lastDateFromServer >= this.currentDate) {
                  endDate = lastDateFromServer;
            } else {
                  endDate = this.currentDate;
            }
            const daysToFill = Math.round((endDate.getTime() - startDate.getTime()) / this.dayLongInMS) + additionalDays;
            return this.fillDaysBetwenStartAndEnd(loadedDays, daysToFill);
      }

      private fillDaysBetwenStartAndEnd(loadedDays: Day[], daysToFill: number) {
            for (let i = 0; i < daysToFill; i++) {
                  if (loadedDays[i] == undefined) {
                        loadedDays[i] = new Day(new Date((loadedDays[i - 1].date).getTime() + this.dayLongInMS));
                  }
            }
            return loadedDays;
      }
}