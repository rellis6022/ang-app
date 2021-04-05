import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPrincipalPreviewComponent } from './view-principal-preview.component';

describe('ViewPrincipalPreviewComponent', () => {
  let component: ViewPrincipalPreviewComponent;
  let fixture: ComponentFixture<ViewPrincipalPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPrincipalPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPrincipalPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
