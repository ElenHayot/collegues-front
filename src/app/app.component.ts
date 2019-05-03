import { Component, OnInit } from '@angular/core';
import {DataService} from './services/data.service';

@Component({
  selector: 'app-root',
  template: `
   
  <div class="row">
  
    <app-find-collegue-by-name [mat]="unTableauDeMatricules" class="col-6"></app-find-collegue-by-name>
    <app-collegue [col]="unObjetCollegueFourni" class="col-6"></app-collegue>
    
  </div>
  `
})

export class AppComponent implements OnInit {
  unObjetCollegueFourni;
  unTableauDeMatricules;

  constructor(private _dataSrv:DataService) {}

  ngOnInit(): void {
    this.unObjetCollegueFourni = this._dataSrv.returnCurrentCollegue('');
    this.unTableauDeMatricules = this._dataSrv.findByName('');
    
  }
}
