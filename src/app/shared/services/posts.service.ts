import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResponsePost } from '../interfaces/response/response-post.interface';
import { IPostList } from '../interfaces/post-list.interface';






@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  async getPosts(): Promise<IPostList> {
    const response =  await this.http.get<IResponsePost>('assets/posts.json').toPromise();

    return response.posts;
  }

}
