import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { FindCollegueByNameComponent } from './find-collegue-by-name/find-collegue-by-name.component';
import { CreateCollegueComponent } from './create-collegue/create-collegue.component';
import { UrlValidatorDirective } from './validators/url-validator.directive';
import { EmailValidatorDirective } from './validators/email-validator.directive';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { AccueilComponent } from './accueil/accueil.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { SelectedCollegueComponent } from './gallerie/selected-collegue/selected-collegue.component';
import { AboutComponent } from './about/about.component';
import { CommentCollegueComponent } from './comment-collegue/comment-collegue.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { MeComponent } from './authentification/me/me.component'

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    FindCollegueByNameComponent,
    CreateCollegueComponent,
    UrlValidatorDirective,
    EmailValidatorDirective,
    MenuComponent,
    AccueilComponent,
    GallerieComponent,
    SelectedCollegueComponent,
    AboutComponent,
    CommentCollegueComponent,
    AuthentificationComponent,
    MeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
