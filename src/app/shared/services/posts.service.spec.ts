import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PostsService } from './posts.service';
import { post } from 'selenium-webdriver/http';
import { IPostList } from '../interfaces/post-list.interface';
import { IPostListItem } from '../interfaces/post-list-item.interface';
import { environment } from 'src/environments/environment';

describe('PostsService', () => {

  let service: PostsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports:[
      HttpClientTestingModule
    ]
    });
    httpMock = TestBed.get(HttpTestingController);
    service = TestBed.get(PostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  }); 

  describe('getPost', ()=>{

    it('should contains method getPosts', () => {
      // const service: PostsService = TestBed.get(PostsService);
      expect(service.getPosts).toEqual(
        jasmine.any(Function)
      );
    });

    it('should make HTTP request', async () => {
      const response = service.getPosts(); //promise
      const server = httpMock.expectOne(environment.postsUrl);

      const fakePostList = [
        {id: "asd"},
        {id: "qwe"} 
      ] as IPostList;

      const meh = {
        posts: fakePostList,
      };

      server.flush(meh);
      const posts = await response;
      expect(posts).toEqual(fakePostList);

    });


    

  })


  describe('getPostById', ()=>{

    it('should contains method getPostById', () => {
      // const service: PostsService = TestBed.get(PostsService);
      expect(service.getPostById).toEqual(
        jasmine.any(Function)
      );
    });

    it('should make HTTP request', async () => {
      const response = service.getPostById("asd"); //promise
      const server = httpMock.expectOne(environment.postsUrl);

      const fakePost = {id: "asd"} as IPostListItem;
      const fakePostList = [
        fakePost,
        {id: "qwe"} 
      ] as IPostList;

      const meh = {
        posts: fakePostList,
      };

      server.flush(meh);
      const posts = await response;
      expect(posts).toEqual(fakePost);

    });


    

  })

});
