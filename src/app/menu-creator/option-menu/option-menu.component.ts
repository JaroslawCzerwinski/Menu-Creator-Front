import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-option-menu',
  templateUrl: './option-menu.component.html',
  styleUrls: ['./option-menu.component.css']
})
export class OptionMenuComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService ) { }

  ngOnInit(): void {
  }

  onSaveDays(){
    this.dataStorageService.storeDays();
  }
}
