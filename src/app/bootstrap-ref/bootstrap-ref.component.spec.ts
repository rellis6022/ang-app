import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapRefComponent } from './bootstrap-ref.component';

describe('BootstrapRefComponent', () => {
  let component: BootstrapRefComponent;
  let fixture: ComponentFixture<BootstrapRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapRefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
