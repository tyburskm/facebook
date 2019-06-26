import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentAddFormComponent } from './comment-add-form.component';
import { FormsModule } from '@angular/forms';

describe('CommentAddFormComponent', () => {
  let component: CommentAddFormComponent;
  let fixture: ComponentFixture<CommentAddFormComponent>;
  let $component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentAddFormComponent ],
      imports:[FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentAddFormComponent);
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
});
