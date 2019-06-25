import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListItemComponent } from './post-list-item.component';
import { MyDatePipe } from 'src/app/shared/pipes/my-date.pipe';

describe('PostListItemComponent', () => {
  let component: PostListItemComponent;
  let fixture: ComponentFixture<PostListItemComponent>;
  let $component: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListItemComponent, MyDatePipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListItemComponent);
    component = fixture.componentInstance;
    $component = fixture.debugElement.nativeElement;

    fixture.detectChanges();
  });

  afterEach(()=>{
    $component.remove();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
