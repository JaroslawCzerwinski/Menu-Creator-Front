import { Component, OnInit, Input } from '@angular/core';

import { Day } from '../day.model';
import { DaysService } from '../days.service';
import { RecipeService } from '../../recipes/recipe.service';
import { Subscription } from 'rxjs';
import { DtataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-days-list',
  templateUrl: './days-list.component.html',
  styleUrls: ['./days-list.component.css']
})
export class DaysListComponent implements OnInit {

  days: Day[];
  subscription: Subscription;

  constructor(
    private daysService: DaysService,
    private dataStorageService: DtataStorageService) {}

  ngOnInit() {
   this.subscription = this.daysService.daysChanged
      .subscribe(
        (days: Day[]) => {
          this.days = days;
        }
      );
    this.dataStorageService.loadDays().subscribe();
  }

}
