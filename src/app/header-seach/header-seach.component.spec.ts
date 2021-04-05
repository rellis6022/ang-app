import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSeachComponent } from './header-seach.component';

describe('HeaderSeachComponent', () => {
  let component: HeaderSeachComponent;
  let fixture: ComponentFixture<HeaderSeachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSeachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
