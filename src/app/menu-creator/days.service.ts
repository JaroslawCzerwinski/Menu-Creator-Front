import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Day } from "./day.model";
import { Recipe } from "../recipes/recipe.model";
import { MealService } from "../shared/meal.service";

@Injectable()
export class DaysService {

      private currentDate: Date = new Date(new Date().getTime());
      private dayLongInMS: number = 86400000;
      private daysToShow: Array<Day> = [];
      private allDays: Array<Day> = [];
      daysChanged = new Subject<Day[]>();

      constructor(private mealService: MealService) { }


      initDays() {
            let initDays: Day[] = [];
            for (let i = 0; i < 5; i++) {
                  initDays[i] = new Day(new Date((this.currentDate.getTime() + i * this.dayLongInMS)));
            }
            return initDays;
      }

      getDayByDate(date: Date) {
            const index = this.daysToShow.findIndex(day => day.date.getDate() == date.getDate());
            return this.daysToShow[index];
      }

      getShowedDays() {
            console.log(this.daysToShow);
            return this.daysToShow.slice();
      }

      getAllDays() {
            return this.allDays.slice();
      }

      addRecipeToDay(recipe: Recipe) {
            let selectedDay = this.getDayByDate(this.mealService.selectedDay);
            let dayRecipes = selectedDay.getRecipe();
            let newRecipes = [];
          
            if (dayRecipes == undefined) {
                  newRecipes.push(recipe);
            } else {
                  newRecipes = dayRecipes;
                  newRecipes.push(recipe);
            }
            selectedDay.setRecipe(newRecipes);
            this.updateDays(selectedDay);
      }

      private updateDays(dayToChange: Day){
            console.log(this.allDays);
            const index = this.allDays.findIndex(day => day.date.getDate() == dayToChange.getDate().getDate());
            this.allDays[index].setRecipe(dayToChange.recipes);
            console.log(this.allDays);
            this.daysChanged.next(this.daysToShow.slice());
      }

      delateRecipeFromDay(recipe: Recipe) {
            throw new Error("Method not implemented.");
          }

      setDays(loadedDays: Day[]) {
            this.allDays = this.fillEmptyDays(loadedDays);
            this.daysToShow = this.showFiveActualDays(this.allDays);
            console.log(this.daysToShow);
            this.daysChanged.next(this.daysToShow.slice());
      }

      showPreviousDay() {
            this.daysToShow.pop();
            const tempIndex = this.allDays.findIndex(day => { day.date.getDay() == this.daysToShow[0].getDate().getDay() });
            if (tempIndex == -1) {
                  this.allDays.unshift(new Day(new Date(this.daysToShow[0].getDate().getTime() - this.dayLongInMS)));
                  this.daysToShow.unshift(this.allDays[0]);
            } else {
                  this.daysToShow.unshift(this.allDays[tempIndex - 1]);
            }
            this.daysChanged.next(this.daysToShow.slice());
      }

      showNextDay() {
            this.daysToShow.shift();
            const lastAllDays = this.allDays[this.allDays.length - 1].getDate();
            const lastShowedDay = this.daysToShow[this.daysToShow.length - 1].getDate();

            if (lastAllDays == lastShowedDay) {
                  this.allDays.push(new Day(new Date(this.daysToShow[this.daysToShow.length - 1].getDate().getTime() + this.dayLongInMS)));
                  this.daysToShow.push(this.allDays[this.allDays.length - 1]);
            } else {
                  const tempIndex = this.allDays.findIndex(day => day.date.getDay() == this.daysToShow[this.daysToShow.length - 1].getDate().getDay());
                  this.daysToShow.push(this.allDays[tempIndex + 1]);
            }
            this.daysChanged.next(this.daysToShow.slice());
      }

      private showFiveActualDays(allDays: Day[]) {
            const currentDateIndex = allDays.findIndex(day => day.date.getDay() == this.currentDate.getDay());
            return allDays.slice(currentDateIndex, currentDateIndex + 5);
      }

      private fillEmptyDays(loadedDays: Day[]) {
            const additionalDays = 4;
            const firstDateFromServer = loadedDays[0].date;
            const lastDateFromServer = loadedDays[loadedDays.length - 1].date;
            let startDate: Date;
            let endDate: Date;

            if (firstDateFromServer.getDate() > this.currentDate.getDate()) {
                  startDate = this.currentDate;
                  loadedDays.unshift(new Day(new Date(this.currentDate)));
            } else {
                  startDate = firstDateFromServer;
            }
            if (lastDateFromServer.getDate() >= this.currentDate.getDate()) {
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