import { Component, OnInit } from '@angular/core';
import { Day } from './day.model';
import { DaysService } from './days.service';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-calendar-menu',
  templateUrl: './calendar-menu.component.html',
  styleUrls: ['./calendar-menu.component.css']
})
export class CalendarMenuComponent implements OnInit {
  dayx: string[] = ["poniedziałek", "wtroek", "środa", "czwartek", "piatek"];
  day: Day;
  days: Day[];

  constructor(private daysService : DaysService,
              private recipeService : RecipeService ) { 

  }

  ngOnInit() {
    this.days = this.daysService.getDays();
    console.log(this.days);
  }

}
