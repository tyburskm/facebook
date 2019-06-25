import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-post-profile-page',
  templateUrl: './post-profile-page.component.html',
  styleUrls: ['./post-profile-page.component.scss']
})
export class PostProfilePageComponent implements OnInit {

  post = null;

  constructor(private route: ActivatedRoute, private postService: PostsService) { }

  ngOnInit() {
    this.setupPost();
  }

  async setupPost(){
    const id: string = this.route.snapshot.params.post_id;
    console.log(id);
    this.post = await this.postService.getPostById(id);
  }

}
