import { Component, OnInit, Input } from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-find-collegue-by-name',
  templateUrl: './find-collegue-by-name.component.html'
})
export class FindCollegueByNameComponent implements OnInit {
  
  @Input() mat:string[];
  afficherListe: Boolean;
  
  constructor(private _srv:DataService) { }
  
  ngOnInit() {
  }

  showListe() {
    this.afficherListe = true;
    this._srv.findByName('');
  }

}
