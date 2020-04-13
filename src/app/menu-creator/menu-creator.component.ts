import { Component, OnInit, OnDestroy } from '@angular/core';
import { DaysService } from './days.service';
import { MealService } from './meal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu-creator',
  templateUrl: './menu-creator.component.html',
  styleUrls: ['./menu-creator.component.css']
})
export class MenuCreatorComponent implements OnInit, OnDestroy {

  selctedDay: Date;
  subscription: Subscription;

  constructor(private daysService: DaysService,
    private mealService: MealService) { }

  ngOnInit() {
    this.subscription = this.mealService.daysChanged
      .subscribe(
        (date: Date) => {
          this.selctedDay = date;
        }
      );
  }

  previousDays() {
    this.daysService.showPreviousDay();
  }

  nextDays() {
    this.daysService.showNextDay();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
