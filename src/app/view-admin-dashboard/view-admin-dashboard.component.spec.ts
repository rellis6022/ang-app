import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdminDashboardComponent } from './view-admin-dashboard.component';

describe('ViewAdminDashboardComponent', () => {
  let component: ViewAdminDashboardComponent;
  let fixture: ComponentFixture<ViewAdminDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAdminDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
