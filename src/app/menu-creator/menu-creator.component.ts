import { Component, OnInit } from '@angular/core';
import { DaysService } from './days.service';

@Component({
  selector: 'app-menu-creator',
  templateUrl: './menu-creator.component.html',
  styleUrls: ['./menu-creator.component.css']
})
export class MenuCreatorComponent implements OnInit {

  constructor(private daysService: DaysService) { }

  ngOnInit(): void {
  }

  previousDays(){
   // this.daysService.showPreviousDay();
  }
  nextDays(){
  //  this.daysService.showNextDay();
  }
}
