import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  template: `

  <div class="row">
  
    <app-find-collegue-by-name class="col-6"></app-find-collegue-by-name>

    <app-collegue  class="col-6"></app-collegue>

  </div>

  `
})
export class AccueilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
