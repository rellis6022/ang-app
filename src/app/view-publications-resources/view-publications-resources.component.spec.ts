import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPublicationsResourcesComponent } from './view-publications-resources.component';

describe('ViewPublicationsResourcesComponent', () => {
  let component: ViewPublicationsResourcesComponent;
  let fixture: ComponentFixture<ViewPublicationsResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPublicationsResourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPublicationsResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
