import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Collegue } from '../../models/Collegue';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-selected-collegue',
  templateUrl: './selected-collegue.component.html',
  styleUrls: ['./selected-collegue.component.css']
})
export class SelectedCollegueComponent implements OnInit {

  col:Collegue = new Collegue('', '', undefined, '', '', []);
  matricule: string;

  constructor(private _srv: DataService, private route: ActivatedRoute) {
    this.matricule = route.snapshot.paramMap.get('matricule');
  }

  ngOnInit() {

    //abonnement au changement de route avec réutilisation du composant par le routeur
    this.route.paramMap.subscribe((params: ParamMap) => {
      //récupération du paramètre matricule
      const matricule = params.get('matricule');
    });

    this._srv.publish(this.matricule).subscribe(returnValue => {
      this.col = returnValue;
    });
  }

}
