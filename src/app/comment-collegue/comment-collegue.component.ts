import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
import { Comment } from '../models/comment';

@Component({
  selector: 'app-comment-collegue',
  templateUrl: './comment-collegue.component.html',
  styleUrls: ['./comment-collegue.component.css']
})
export class CommentCollegueComponent implements OnInit {

  comment :Comment = new Comment('','');
  backendMsg :string = '';
  @Input() matricule :string;

  constructor(private _srv:DataService) { }

  ngOnInit() {
  }

  saveAComment(textarea :string) {
    this.comment.matriculeCollegue = this.matricule;
    this.comment.text = textarea;

    this._srv.saveNewComment(this.comment).subscribe(
      returnValue => console.log(returnValue),
      err => this.backendMsg = err.error
    );
  }

}
