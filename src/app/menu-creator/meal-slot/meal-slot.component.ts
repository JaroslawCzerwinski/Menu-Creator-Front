import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../recipes/recipe.model';
import { DaysService } from '../days.service';

@Component({
  selector: 'app-meal-slot',
  templateUrl: './meal-slot.component.html',
  styleUrls: ['./meal-slot.component.css']
})
export class MealSlotComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;
  
  constructor(private daysService: DaysService) { }

  ngOnInit() {

    console.log(this.recipe);
  }

  delateMeal(){
    this.daysService.delateRecipeFromDay(this.recipe);
  }


}
