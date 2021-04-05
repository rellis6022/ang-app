import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAuthorPublicationPreviewComponent } from './view-author-publication-preview.component';

describe('ViewAuthorPublicationPreviewComponent', () => {
  let component: ViewAuthorPublicationPreviewComponent;
  let fixture: ComponentFixture<ViewAuthorPublicationPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAuthorPublicationPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAuthorPublicationPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
