import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { Subject, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment'

import {tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private subject = new Subject<Collegue>();

  constructor(private _http:HttpClient) { }

  findByName(name: string) :Observable<string[]>{
     return this._http.get<string[]>(`${environment.backendUrl}?name=${name}`);
  }

  publish(matricule :string):Observable<Collegue> {
      return this._http.get<Collegue>(`${environment.backendUrl}/${matricule}`)
      .pipe(
        tap(col => this.subject.next(col)) 
      );
  }

  returnCurrentCollegue() :Observable<Collegue> {
    return this.subject.asObservable();
  }
}
