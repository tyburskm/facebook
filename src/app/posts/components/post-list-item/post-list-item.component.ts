import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post = null;

  constructor() { }

  ngOnInit() {
  }

  onAddComment(comment){
    console.log("addoncomment",comment)
    if (!Array.isArray(this.post.comments)){
      this.post.comments = [];
    }
    this.post.comments.push(comment);

  }


}
