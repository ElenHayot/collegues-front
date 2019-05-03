import { Component, OnInit, Input} from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html'
})
export class CollegueComponent implements OnInit {

  @Input() col:Collegue;
  updateCol:Boolean;

  constructor(private _srv:DataService) {}

  ngOnInit() {
    
    this._srv.returnCurrentCollegue().subscribe(returnValue => {
      this.col = returnValue;
    });

  }

  updateCollegue() {  
    this.updateCol = true;
  }

  createCollegue() {
    alert("Creation d'un collegue");
  }

}
