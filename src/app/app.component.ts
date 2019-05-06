import { Component, OnInit } from '@angular/core';
import {DataService} from './services/data.service';
import { Collegue } from './models/Collegue';

@Component({
  selector: 'app-root',
  template: `
   
  <div class="row">
  
    <app-find-collegue-by-name class="col-6"></app-find-collegue-by-name>

    <app-collegue  class="col-6"></app-collegue>

  </div>
  <hr />

  `
})

export class AppComponent implements OnInit {


  constructor(private __dataSrv:DataService) {}

  ngOnInit(): void {
  }

}
