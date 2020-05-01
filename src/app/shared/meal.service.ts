import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable()
export class MealService {

    selectedDay: Date = null;
    daysChanged = new Subject<Date>();
    addMode = false;
    

    changeSelectedDay(date: Date) {
        this.selectedDay = date;
        this.daysChanged.next(this.selectedDay);
    }

    getSelectedDay(){
        return this.selectedDay;
    }

}