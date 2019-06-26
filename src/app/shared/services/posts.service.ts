import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResponsePost } from '../interfaces/response/response-post.interface';
import { IPostList } from '../interfaces/post-list.interface';
import { IPostListItem } from '../interfaces/post-list-item.interface';
import { environment } from 'src/environments/environment';
import { StorageService } from './storage.service';


const STORAGE_POST_KEYNAME = "posts";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  

  constructor(private http: HttpClient, private storage: StorageService) { }

  async fetchPosts(): Promise<IPostList> {
    const response =  await this.http.get<IResponsePost>(environment.postsUrl).toPromise();

    return response.posts;
  }
  async getPostsById(id: string) {
    //const response =  await this.http.get<IResponsePost>('/assets/posts.json').toPromise();
    const data = await this.getPosts();
    return data.find(x=>x.id === id);

  }

  async getPosts(){
    const posts = this.storage.read(STORAGE_POST_KEYNAME);
    if(!posts){
      const freshPosts = await this.fetchPosts();
      this.storage.create(STORAGE_POST_KEYNAME, freshPosts);
      return freshPosts;
    }
    return posts;
  }

  async savePosts(posts: IPostList){
    this.storage.create(STORAGE_POST_KEYNAME, posts);
  }

}
