import { Component, OnInit, Input } from '@angular/core';
import { ICommentListItem } from 'src/app/shared/interfaces/comment-list-item.interface';

@Component({
  selector: 'app-comment-list-item',
  templateUrl: './comment-list-item.component.html',
  styleUrls: ['./comment-list-item.component.scss']
})
export class CommentListItemComponent implements OnInit {


  @Input() comment: ICommentListItem = null;

  constructor() { }

  ngOnInit() {
  }

  getCommentAuthorAvatar(){
    return "http://placeskull.com/40/40";
  }

}
