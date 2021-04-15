import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CardArticleComponent } from './card-article/card-article.component';
import { UiModalComponent } from './ui-modal/ui-modal.component';
import { UiHeadingComponent } from './ui-heading/ui-heading.component';



@NgModule({
  declarations: [ListComponent, CardArticleComponent, UiModalComponent, UiHeadingComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent, 
    CardArticleComponent,
    UiModalComponent,
    UiHeadingComponent
  ]
})
export class UiLibModule { }
