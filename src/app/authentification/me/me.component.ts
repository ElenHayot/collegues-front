import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {

  meInfos :string[] = [];
  errorMsg :string = "";
  constructor(private _srv:DataService) { }

  ngOnInit() {

    this._srv.meInformations().subscribe(
      returnValue => this.meInfos = returnValue,
      err => this.errorMsg = err.error
    );
    
  }


}
