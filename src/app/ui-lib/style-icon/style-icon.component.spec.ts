import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleIconComponent } from './style-icon.component';

describe('StyleIconComponent', () => {
  let component: StyleIconComponent;
  let fixture: ComponentFixture<StyleIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
