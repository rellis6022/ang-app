import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAuthorPublicationReviewComponent } from './view-author-publication-review.component';

describe('ViewAuthorPublicationReviewComponent', () => {
  let component: ViewAuthorPublicationReviewComponent;
  let fixture: ComponentFixture<ViewAuthorPublicationReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAuthorPublicationReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAuthorPublicationReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
