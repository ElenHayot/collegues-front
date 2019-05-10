import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { Subject, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Trombinoscope} from '../models/trombinoscope';

import {tap } from 'rxjs/operators'
import { Comment } from '../models/comment';
import { InfosAuthentification } from '../models/infos-authentification';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private subject = new Subject<Collegue>();
  private subjectBoolean = new Subject<Boolean>();

  constructor(private _http:HttpClient) { 
    
    //keep the subjectValue after a reload (still connected!)
    this.meInformations().subscribe (() => this.setSubjectValue (true));
    
  }

  findByName(name: string) :Observable<string[]>{
     return this._http.get<string[]>(`${environment.backendUrl}?name=${name}`, {withCredentials : true});
  }

  publish(matricule :string):Observable<Collegue> {
      return this._http.get<Collegue>(`${environment.backendUrl}/${matricule}`, {withCredentials : true})
      .pipe(
        tap(col => this.subject.next(col)) 
      );
  }

  returnCurrentCollegue() :Observable<Collegue> {
    return this.subject.asObservable();
  }

  updateCollegue(matricule, collegueToUp) :Observable<Collegue>{
    return this._http.patch<Collegue>(`${environment.backendUrl}/${matricule}`,collegueToUp, {withCredentials : true})
  }

  addNewCollegue(newCol :Collegue) :Observable<Collegue>{
    return this._http.post<Collegue>(`${environment.backendUrl}`, newCol, {withCredentials : true});
  }

  showPhotos() :Observable<Trombinoscope> {
    return this._http.get<Trombinoscope>(`${environment.backendUrl}/photos`, {withCredentials : true});
  }

  saveNewComment(comment :Comment) :Observable<Comment>{
    return this._http.post<Comment>(`${environment.backendUrl}/${comment.matriculeCollegue}/comments`,comment, {withCredentials : true});
  }

  connectCollegue(authentCollegue : InfosAuthentification) :Observable<any> {
    return this._http.post<InfosAuthentification>(`${environment.baseUrl}/auth`, authentCollegue, {withCredentials : true}); 
  }

  meInformations() :Observable<string[]> {
    return this._http.get<string[]>(`${environment.baseUrl}/me`, {withCredentials : true});
  }

  disconnectCollegue() :Observable<any> {
    return this._http.post<any>(`${environment.baseUrl}/logout`, null, {withCredentials : true});
  }

  returnCurrentBoolean() :Observable<Boolean>{
    return this.subjectBoolean.asObservable();
  }

  setSubjectValue(value :Boolean) {
    this.subjectBoolean.next(value);
  }

}
