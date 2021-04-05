import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAuthorReviewComponent } from './view-author-review.component';

describe('ViewAuthorReviewComponent', () => {
  let component: ViewAuthorReviewComponent;
  let fixture: ComponentFixture<ViewAuthorReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAuthorReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAuthorReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
