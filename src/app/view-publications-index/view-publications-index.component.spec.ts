import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPublicationsIndexComponent } from './view-publications-index.component';

describe('ViewPublicationsIndexComponent', () => {
  let component: ViewPublicationsIndexComponent;
  let fixture: ComponentFixture<ViewPublicationsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPublicationsIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPublicationsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
