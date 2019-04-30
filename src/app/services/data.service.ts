import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { matriculesArray } from '../mock/matricules.mock';
import { collegueMock } from '../mock/collegues.mock';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  findByName(name: string) :string[]{
    return matriculesArray;
  }

  returnCurrentCollegue() :Collegue {
    return collegueMock;
  }
}
