import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderSeachComponent } from './header-seach/header-seach.component';
import { NavLeftComponent } from './nav-left/nav-left.component';
import { NavRightComponent } from './nav-right/nav-right.component';
import { HeaderSettingsComponent } from './header-settings/header-settings.component';
import { ViewAuthorDashboardComponent } from './view-author-dashboard/view-author-dashboard.component';
import { ViewAuthorPublicationComponent } from './view-author-publication/view-author-publication.component';
import { ViewAuthorPublicationPreviewComponent } from './view-author-publication-preview/view-author-publication-preview.component';
import { ViewPrincipalPublicationComponent } from './view-principal-publication/view-principal-publication.component';
import { ViewPrincipalDashboardComponent } from './view-principal-dashboard/view-principal-dashboard.component';
import { ViewPrincipalReviewComponent } from './view-principal-review/view-principal-review.component';
import { ViewPrincipalPreviewComponent } from './view-principal-preview/view-principal-preview.component';
import { ViewAuthorReviewComponent } from './view-author-review/view-author-review.component';
import { ViewAdminDashboardComponent } from './view-admin-dashboard/view-admin-dashboard.component';
import { ViewAuthorPublicationReviewComponent } from './view-author-publication-review/view-author-publication-review.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeaderSeachComponent,
    NavLeftComponent,
    NavRightComponent,
    HeaderSettingsComponent,
    ViewAuthorDashboardComponent,
    ViewAuthorPublicationComponent,
    ViewAuthorPublicationPreviewComponent,
    ViewPrincipalPublicationComponent,
    ViewPrincipalDashboardComponent,
    ViewPrincipalReviewComponent,
    ViewPrincipalPreviewComponent,
    ViewAuthorReviewComponent,
    ViewAdminDashboardComponent,
    ViewAuthorPublicationReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
