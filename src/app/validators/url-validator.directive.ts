import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidationErrors, Validator } from '@angular/forms';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { INVALID } from '@angular/forms/src/model';

@Directive({
  selector: '[appUrlValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: UrlValidatorDirective, multi: true}]
})

export class UrlValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    let photoUrl = control.value;
    if(!photoUrl.startsWith("http") || photoUrl.length<7) {
      return {urlError : `URL must begin with 'http' !`};
    }
    
    return null;
  }

}
