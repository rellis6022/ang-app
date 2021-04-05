import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPublicationsArticleComponent } from './view-publications-article.component';

describe('ViewPublicationsArticleComponent', () => {
  let component: ViewPublicationsArticleComponent;
  let fixture: ComponentFixture<ViewPublicationsArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPublicationsArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPublicationsArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
