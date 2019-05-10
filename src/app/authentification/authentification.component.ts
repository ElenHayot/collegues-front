import { Component, OnInit, Output, EventEmitter, Injectable } from '@angular/core';
import { InfosAuthentification } from '../models/infos-authentification';
import { DataService } from '../services/data.service';
import { Subject, Observable} from 'rxjs';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html'
})

export class AuthentificationComponent implements OnInit {

  authentCollegue: InfosAuthentification = new InfosAuthentification('', '');
  errorMsg:string = "";
  constructor(private _srv:DataService) { }

  ngOnInit() {
  }


  connect(){

    this._srv.connectCollegue(this.authentCollegue).subscribe(
      (returnValue) => {
        console.log(returnValue);
        this._srv.setSubjectValue(true);
      },
      (err) => this.errorMsg = err.error
    )
    
  }

}
