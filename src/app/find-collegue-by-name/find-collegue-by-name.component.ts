import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-find-collegue-by-name',
  templateUrl: './find-collegue-by-name.component.html'
})
export class FindCollegueByNameComponent implements OnInit {

  @Input() mat: string;

  constructor() { }

  ngOnInit() {
  }

}
