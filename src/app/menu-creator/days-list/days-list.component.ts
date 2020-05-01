import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { DaysService } from '../days.service';
import { Day } from '../day.model';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-days-list',
  templateUrl: './days-list.component.html',
  styleUrls: ['./days-list.component.css']
})
export class DaysListComponent implements OnInit, OnDestroy{

  showedDays: Day[];
  subscription: Subscription;
  
  constructor(
    private daysService: DaysService,
    private dataStorageService: DataStorageService) {}

  ngOnInit() {
   this.subscription = this.daysService.daysChanged
      .subscribe(
        (days: Day[]) => {
          this.showedDays = days;
          console.log("dani sie zaktualizowaly");
          console.log(this.showedDays);
        }
      );
    this.dataStorageService.loadDays().subscribe();
   
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
