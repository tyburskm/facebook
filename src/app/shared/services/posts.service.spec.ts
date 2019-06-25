import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PostsService } from './posts.service';
import { post } from 'selenium-webdriver/http';

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
      const server = httpMock.expectOne('assets/posts.json');

      server.flush(['pierwszy', 'drugi']);
      const posts = await response;
      expect(posts).toEqual(['pierwszy', 'drugi']);

    });

  })


});
