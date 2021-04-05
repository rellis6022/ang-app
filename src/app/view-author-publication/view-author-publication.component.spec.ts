import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAuthorPublicationComponent } from './view-author-publication.component';

describe('ViewAuthorPublicationComponent', () => {
  let component: ViewAuthorPublicationComponent;
  let fixture: ComponentFixture<ViewAuthorPublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAuthorPublicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAuthorPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
