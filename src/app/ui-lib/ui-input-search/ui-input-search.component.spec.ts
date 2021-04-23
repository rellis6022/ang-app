import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiInputSearchComponent } from './ui-input-search.component';

describe('UiInputSearchComponent', () => {
  let component: UiInputSearchComponent;
  let fixture: ComponentFixture<UiInputSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiInputSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiInputSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
