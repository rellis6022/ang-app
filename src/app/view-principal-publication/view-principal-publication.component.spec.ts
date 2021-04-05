import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPrincipalPublicationComponent } from './view-principal-publication.component';

describe('ViewPrincipalPublicationComponent', () => {
  let component: ViewPrincipalPublicationComponent;
  let fixture: ComponentFixture<ViewPrincipalPublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPrincipalPublicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPrincipalPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
