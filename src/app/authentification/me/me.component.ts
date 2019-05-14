import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { MeCollegue } from '../../models/me-collegue';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html'
})
export class MeComponent implements OnInit {

  meInfos :MeCollegue = new MeCollegue('','','',[],'','');
  errorMsg :string = "";
  constructor(private _srv:DataService) { }

  ngOnInit() {

    this._srv.meInformations().subscribe(
      returnValue => this.meInfos = returnValue,
      err => this.errorMsg = err.error
    );
    
  }


}
