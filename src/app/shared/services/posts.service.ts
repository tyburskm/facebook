import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResponsePost } from '../interfaces/response/response-post.interface';
import { IPostList } from '../interfaces/post-list.interface';
import { IPostListItem } from '../interfaces/post-list-item.interface';
import { environment } from 'src/environments/environment';






@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  async getPosts(): Promise<IPostList> {
    const response =  await this.http.get<IResponsePost>(environment.postsUrl).toPromise();

    return response.posts;
  }
  async getPostById(id: string): Promise<IPostListItem | undefined> {
    //const response =  await this.http.get<IResponsePost>('/assets/posts.json').toPromise();
    const data = await this.getPosts();
    return data.find(x=>x.id === id);

  }

}
