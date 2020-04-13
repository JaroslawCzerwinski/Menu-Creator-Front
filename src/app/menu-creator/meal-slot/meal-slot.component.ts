import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../recipes/recipe.model';

@Component({
  selector: 'app-meal-slot',
  templateUrl: './meal-slot.component.html',
  styleUrls: ['./meal-slot.component.css']
})
export class MealSlotComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
