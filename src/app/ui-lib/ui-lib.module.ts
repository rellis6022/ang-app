import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CardArticleComponent } from './card-article/card-article.component';



@NgModule({
  declarations: [ListComponent, CardArticleComponent],
  imports: [
    CommonModule
  ],
  exports: [ListComponent, CardArticleComponent]
})
export class UiLibModule { }
