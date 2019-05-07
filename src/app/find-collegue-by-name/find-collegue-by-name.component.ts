import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {DataService} from '../services/data.service';
import { Collegue } from '../models/Collegue';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-find-collegue-by-name',
  templateUrl: './find-collegue-by-name.component.html'
})

export class FindCollegueByNameComponent implements OnInit {
  
  mat:string[] = [];
  errorMsg = '';
  afficherListe: Boolean;
  errorOrNot: Boolean;

  actionSub: Subscription;
  
  constructor(private _srv:DataService) { }
  
  ngOnInit() {}

  showListe(saisie: string) {
    this.afficherListe = true;
    this.actionSub = this._srv.findByName(saisie)
        .subscribe(
          tabMatsServeur => {
            // cas ok
            this.mat = tabMatsServeur;
            this.errorOrNot = false;
          },
          err => {
            // cas ko
            this.errorMsg = err.error;
            this.errorOrNot = true;
          }
        );
  }

  showCurrentCollegue(matricule : string) {
    this._srv.publish(matricule).subscribe(col => {}, err => {
      this.errorMsg = err;
      this.errorOrNot = true;
    });
  }

}
