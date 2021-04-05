import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPrincipalDashboardComponent } from './view-principal-dashboard.component';

describe('ViewPrincipalDashboardComponent', () => {
  let component: ViewPrincipalDashboardComponent;
  let fixture: ComponentFixture<ViewPrincipalDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPrincipalDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPrincipalDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
