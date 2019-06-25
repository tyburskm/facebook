import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PostsService } from './posts.service';

describe('PostsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: PostsService = TestBed.get(PostsService);
    expect(service).toBeTruthy();
  }); 
  it('should contains method getPosts', () => {
    const service: PostsService = TestBed.get(PostsService);
    expect(service.getPosts).toEqual(
      jasmine.any(Function)
    );
  });
});
