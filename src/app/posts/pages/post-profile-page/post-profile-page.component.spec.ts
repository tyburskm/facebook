import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostProfilePageComponent } from './post-profile-page.component';
import { PostListItemComponent } from '../../components/post-list-item/post-list-item.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommentsModule } from 'src/app/comments/comments.module';

describe('PostProfilePageComponent', () => {
  let component: PostProfilePageComponent;
  let fixture: ComponentFixture<PostProfilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostProfilePageComponent, PostListItemComponent ],
      imports: [
        RouterTestingModule, 
        SharedModule,
        HttpClientTestingModule,
        CommentsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
