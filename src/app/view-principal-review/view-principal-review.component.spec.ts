import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPrincipalReviewComponent } from './view-principal-review.component';

describe('ViewPrincipalReviewComponent', () => {
  let component: ViewPrincipalReviewComponent;
  let fixture: ComponentFixture<ViewPrincipalReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPrincipalReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPrincipalReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
