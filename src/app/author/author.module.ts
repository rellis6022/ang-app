import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorRoutingModule } from './author-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthoringComponent } from './authoring/authoring.component';
import { RevisionsComponent } from './revisions/revisions.component';
import { HomeRouteComponent } from './home-route/home-route.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { UiLibModule } from "../ui-lib/ui-lib.module";


@NgModule({
  declarations: [DashboardComponent, AuthoringComponent, RevisionsComponent, HomeRouteComponent],
  imports: [
    CKEditorModule,
    CommonModule,
    AuthorRoutingModule,
    UiLibModule
  ],
  exports: [
    DashboardComponent,
    AuthoringComponent,
    RevisionsComponent
  ]
})
export class AuthorModule { }
