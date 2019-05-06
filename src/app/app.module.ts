import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { FindCollegueByNameComponent } from './find-collegue-by-name/find-collegue-by-name.component';
import { CreateCollegueComponent } from './create-collegue/create-collegue.component';

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    FindCollegueByNameComponent,
    CreateCollegueComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
