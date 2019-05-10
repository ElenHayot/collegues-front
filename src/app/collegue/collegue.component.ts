import { Component, OnInit, Input} from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';
import { CollegueToUpdate } from '../models/collegue-to-update';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html'
})
export class CollegueComponent implements OnInit {

  col:Collegue = new Collegue('', '', undefined, '', '', []);
  collegueToUp :CollegueToUpdate = new CollegueToUpdate('','');
  updateCol:Boolean;  //tells us if we got to update a colleague or not
  responseFormIsOk:Boolean;
  backendMsg :string ='';
  createCollegueBoolean:Boolean = false; 

  constructor(private _srv:DataService) {}

  ngOnInit() {
    
    this._srv.returnCurrentCollegue().subscribe(returnValue => {
      this.col = returnValue;
    });

  }

  updateCollegue() {  
    this.updateCol = true;
  }

  updateCollegueFonction() {
    this.responseFormIsOk = false;
    this.collegueToUp.email = this.col.email;
    this.collegueToUp.photoUrl = this.col.photoUrl;
    this._srv.updateCollegue(this.col.matricule, this.collegueToUp).subscribe(
      returnValue => console.log(returnValue),
      err => this.backendMsg = err.error
    );
  }

  createCollegue() {
    this.createCollegueBoolean = true;
  }

}
