import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAuthorDashboardComponent } from './view-author-dashboard.component';

describe('ViewAuthorDashboardComponent', () => {
  let component: ViewAuthorDashboardComponent;
  let fixture: ComponentFixture<ViewAuthorDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAuthorDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAuthorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
