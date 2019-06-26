import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentListItemComponent } from './comment-list-item.component';
import { ICommentListItem } from 'src/app/shared/interfaces/comment-list-item.interface';

describe('CommentListItemComponent', () => {
  let component: CommentListItemComponent;
  let fixture: ComponentFixture<CommentListItemComponent>;
  let $component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentListItemComponent);
    component = fixture.componentInstance;
    $component = fixture.nativeElement;
    fixture.detectChanges();
  });

  afterEach(()=>{
    $component.remove();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should display body', () => {

    component.comment = {body: "Nice one! GG WP"} as ICommentListItem

    fixture.detectChanges();
    

    const $comments = $component.querySelector('.comment-body');
    expect($comments.textContent.trim()).toEqual("Nice one! GG WP");
  });
});
