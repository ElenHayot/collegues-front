import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Trombinoscope } from '../models/trombinoscope';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {

  trombi :Trombinoscope;
  errorMsg = '';
  showCollegueDetails :Boolean = false;

  constructor(private _srv:DataService) {  }

  ngOnInit() {  

    this._srv.showPhotos().subscribe(
      returnValue => this.trombi = returnValue,
      err => console.log(err.error)
    )
  }

}
