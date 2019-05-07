import {Routes} from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AppComponent } from './app.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { SelectedCollegueComponent } from './gallerie/selected-collegue/selected-collegue.component'
import { AboutComponent } from './about/about.component';

export const ROUTES: Routes= [
    {path: 'accueil', component: AccueilComponent},
    {path: 'gallerie', component: GallerieComponent},
    {path: 'gallerie/:matricule', component: SelectedCollegueComponent},
    {path: 'about', component: AboutComponent},
    {path: '', pathMatch: 'full', redirectTo: 'app'}
];