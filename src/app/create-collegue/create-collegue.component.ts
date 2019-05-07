import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Collegue} from '../models/Collegue'
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-create-collegue',
  templateUrl: './create-collegue.component.html',
  styleUrls: ['./create-collegue.component.css']
})
export class CreateCollegueComponent implements OnInit {

  newCol =  new Collegue('', '', undefined, '', '', '');
  @Output() createCollegueBoolean:EventEmitter<Boolean> = new EventEmitter<Boolean>();
  backendMsg :string ='';
  responseFormIsOk:Boolean = false;

  constructor(private _srv:DataService) { }
 
 
  ngOnInit() {
  }

  createNewCollegue() {
    
    this._srv.addNewCollegue(this.newCol).subscribe(
      returnValue => {console.log(returnValue.matricule);
        this.createCollegueBoolean.emit(false);},
      
      err => {
      
        this.backendMsg = 'un erudit !';
              this.responseFormIsOk = false;});
  }

  backButtonValue() {
    this.createCollegueBoolean.emit(false);
  }
  
}
