import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule } from './author-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthoringComponent } from './authoring/authoring.component';
import { RevisionsComponent } from './revisions/revisions.component';


@NgModule({
  declarations: [DashboardComponent, AuthoringComponent, RevisionsComponent],
  imports: [
    CommonModule,
    AuthorRoutingModule
  ]
})
export class AuthorModule { }
