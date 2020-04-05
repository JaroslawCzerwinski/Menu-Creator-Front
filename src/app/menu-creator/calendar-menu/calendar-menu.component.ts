import { Component, OnInit, Input } from '@angular/core';

import { Day } from '../day.model';
import { DaysService } from '../days.service';
import { RecipeService } from '../../recipes/recipe.service';

@Component({
  selector: 'app-calendar-menu',
  templateUrl: './calendar-menu.component.html',
  styleUrls: ['./calendar-menu.component.css']
})
export class CalendarMenuComponent implements OnInit {
  days: Day[];
  selectedRecipe: boolean = false;
  @Input() index: number;


  constructor(private daysService: DaysService,
    private recipeService: RecipeService) {

  }

  ngOnInit() {
    this.days = this.daysService.getDays();
    console.log(this.days);
  }

  onRecipeSelect() {
    this.selectedRecipe = true;
  }
  previousDays() {

  }
  nextDays() {

  }

}
