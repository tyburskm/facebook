import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IPostListItem } from 'src/app/shared/interfaces/post-list-item.interface';
import uuid from "uuid";

@Component({
  selector: 'app-post-add-form',
  templateUrl: './post-add-form.component.html',
  styleUrls: ['./post-add-form.component.scss']
})
export class PostAddFormComponent implements OnInit {

  addPostForm = new FormGroup({
    post: new FormControl("")
  });


  get post() {
    return this.addPostForm.get("post");
  }

  @Output() addPost = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    const fields = this.addPostForm.getRawValue();
    console.log(fields);

    const newPost = {
      id: uuid(),
      body: fields["post"],
      author: {
        id: uuid(),
        name: "user",
        avatar_url:"http://placeskull.com/40/40"
      },
      images:[
        "http://placekitten.com/200/300"
      ],
      created_time: new Date().toUTCString()
    } as IPostListItem
    this.addPost.next(
      Object.assign({},newPost)
      
      )
  }
  
}
