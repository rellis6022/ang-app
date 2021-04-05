import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAdminDashboardComponent } from './view-admin-dashboard/view-admin-dashboard.component';
import { ViewAuthorDashboardComponent } from './view-author-dashboard/view-author-dashboard.component';
import { ViewAuthorPublicationPreviewComponent } from './view-author-publication-preview/view-author-publication-preview.component';
import { ViewAuthorPublicationReviewComponent } from './view-author-publication-review/view-author-publication-review.component';
import { ViewAuthorPublicationComponent } from './view-author-publication/view-author-publication.component';
import { ViewAuthorReviewComponent } from './view-author-review/view-author-review.component';
import { ViewDashboardComponent } from './view-dashboard/view-dashboard.component';
import { ViewLoginComponent } from './view-login/view-login.component';
import { ViewPrincipalDashboardComponent } from './view-principal-dashboard/view-principal-dashboard.component';
import { ViewPrincipalPreviewComponent } from './view-principal-preview/view-principal-preview.component';
import { ViewPrincipalPublicationComponent } from './view-principal-publication/view-principal-publication.component';
import { ViewPrincipalReviewComponent } from './view-principal-review/view-principal-review.component';

const routes: Routes = [
  // Order matters.  Wildcard need to be at the end of the list.
  { path: 'dashboard', component: ViewDashboardComponent },
  { path: 'login', component: ViewLoginComponent },
  { path: 'author-dashboard', component: ViewAuthorDashboardComponent },
  { path: 'author-publication', component: ViewAuthorPublicationComponent },
  { path: 'author-publication-review', component: ViewAuthorPublicationReviewComponent },
  { path: 'author-publication-preview', component: ViewAuthorPublicationPreviewComponent },
  { path: 'principal-dashboard', component: ViewPrincipalDashboardComponent },
  { path: 'principal-publication', component: ViewPrincipalPublicationComponent },
  { path: 'principal-publication-review', component: ViewPrincipalReviewComponent },
  { path: 'principal-publication-preview', component: ViewPrincipalPreviewComponent },
  { path: 'admin-dashboard', component: ViewAdminDashboardComponent },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }

  //{ path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
