import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   
  <header><h1 class="text-center">Administration Collegue</h1></header>
  <nav>
    <app-menu></app-menu>
    <a routerLink="/accueil"></a>
  </nav>

  <body>
    <hr /><br />

    <router-outlet></router-outlet>

    <br /><hr />
  </body>

  <footer>Add buttons "contact", "accueil" ... </footer>

  `
})

export class AppComponent implements OnInit {


  constructor() {}

  ngOnInit(): void {
  }

}
