import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleDropdownComponent } from './style-dropdown.component';

describe('StyleDropdownComponent', () => {
  let component: StyleDropdownComponent;
  let fixture: ComponentFixture<StyleDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
