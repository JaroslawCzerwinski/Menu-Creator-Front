import { Component, OnInit, Input } from '@angular/core';
import { MealService } from '../../shared/meal.service';


@Component({
  selector: 'app-empty-meal',
  templateUrl: './empty-meal.component.html',
  styleUrls: ['./empty-meal.component.css']
})
export class EmptyMealComponent implements OnInit {
  @Input() date: Date;

  constructor(private mealService: MealService) { }

  ngOnInit() {
  }

  addMeal() {
    this.mealService.changeSelectedDay(this.date);
    
  }
}
