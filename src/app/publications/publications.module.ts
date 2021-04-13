import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicationsRoutingModule } from './publications-routing.module';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';
import { ArticleComponent } from './article/article.component';


@NgModule({
  declarations: [HomeComponent, ResourcesComponent, ArticleComponent],
  imports: [
    CommonModule,
    PublicationsRoutingModule
  ],
  exports:[
    HomeComponent,
    ResourcesComponent,
    ArticleComponent
  ]
})
export class PublicationsModule { }
