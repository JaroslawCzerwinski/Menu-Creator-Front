import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { MealService } from '../../../shared/meal.service';
import { DaysService } from '../../../menu-creator/days.service';
import { DataStorageService } from '../../../shared/data-storage.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;
  addMode = false;

  constructor(private mealService: MealService,
     private daysService: DaysService,
     private dataStorageService: DataStorageService){}

  ngOnInit(){
    this.addMode = this.mealService.addMode;
  }

  addMeal(){
     this.daysService.addRecipeToDay(this.recipe);
    this.dataStorageService.storeDays();
  }
}
