import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable()
export class MealService {

    selectedDay: Date = null;
    daysChanged = new Subject<Date>();
    private addMode = false;
    modeChange = new Subject <boolean>();

    changeSelectedDay(date: Date) {
        this.selectedDay = date;
        this.daysChanged.next(this.selectedDay);
        this.addMode = true;
        this.modeChange.next(this.addMode); //start 
     
    }

}