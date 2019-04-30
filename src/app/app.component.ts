import { Component } from '@angular/core';
import { collegueMock } from './mock/collegues.mock';
import { matriculesArray } from './mock/matricules.mock';

@Component({
  selector: 'app-root',
  template: `
   
  <div class="row">
  
    <app-find-collegue-by-name [mat]="unTableauDeMatricules" class="col-6"></app-find-collegue-by-name>
    <app-collegue [col]="unObjetCollegueFourni" class="col-6"></app-collegue>
    
  </div>
  `
})

export class AppComponent {
  unObjetCollegueFourni = collegueMock;
  unTableauDeMatricules = matriculesArray;
}
