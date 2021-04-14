import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CardArticleComponent } from './card-article/card-article.component';
import { UiModalComponent } from './ui-modal/ui-modal.component';



@NgModule({
  declarations: [ListComponent, CardArticleComponent, UiModalComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent, 
    CardArticleComponent,
    UiModalComponent
  ]
})
export class UiLibModule { }
