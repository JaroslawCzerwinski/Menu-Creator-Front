import { Component, OnInit, Input } from '@angular/core';
import { DaysService } from '../days.service';
import { Day } from '../day.model';
import { MealService } from '../meal.service';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.css']
})
export class AddMealComponent implements OnInit {
  selctedDay: Day;

  constructor(private daysService: DaysService, 
    private mealService: MealService) { }

  ngOnInit() {
    this.selctedDay = this.daysService.getDayByDate(this.mealService.selectedDay);
  }

}
