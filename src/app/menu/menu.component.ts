import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';
import { AuthentificationComponent } from '../authentification/authentification.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  connectValue :Boolean =false;

  constructor(private _srv :DataService) {}

  ngOnInit() {
    this._srv.returnCurrentBoolean().subscribe(
      returnValue => this.connectValue = returnValue
    )
  }

  disconnect() {
    this._srv.disconnectCollegue().subscribe(
      returnValue => {
        console.log(returnValue);
        this._srv.setSubjectValue(false);
      },
      err => err.error
    )
  }

}
