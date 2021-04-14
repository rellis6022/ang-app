import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockDataSandboxComponent } from './mock-data-sandbox.component';

describe('MockDataSandboxComponent', () => {
  let component: MockDataSandboxComponent;
  let fixture: ComponentFixture<MockDataSandboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockDataSandboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MockDataSandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
