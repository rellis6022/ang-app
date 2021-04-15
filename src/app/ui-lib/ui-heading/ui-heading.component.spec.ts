import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiHeadingComponent } from './ui-heading.component';

describe('UiHeadingComponent', () => {
  let component: UiHeadingComponent;
  let fixture: ComponentFixture<UiHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiHeadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
