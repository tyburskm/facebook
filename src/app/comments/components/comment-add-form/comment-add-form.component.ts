import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comment-add-form',
  templateUrl: './comment-add-form.component.html',
  styleUrls: ['./comment-add-form.component.scss']
})
export class CommentAddFormComponent implements OnInit {

  comment = {
    body:null
  }

  @Output() addComment = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(commentForm){
    console.log('submitted', this.comment);
    this.addComment.next(
      Object.assign({},this.comment)
      )
      commentForm.reset();
  }
}
