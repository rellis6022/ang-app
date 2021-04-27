import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSectionTextareaComponent } from './ui-section-textarea.component';

describe('UiSectionTextareaComponent', () => {
  let component: UiSectionTextareaComponent;
  let fixture: ComponentFixture<UiSectionTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiSectionTextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSectionTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
