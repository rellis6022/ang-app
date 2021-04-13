import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RevisionsComponent } from "./revisions/revisions.component";
import { AuthoringComponent } from "./authoring/authoring.component";
import { HomeRouteComponent } from "./home-route/home-route.component";

const routes: Routes = [
  {path:'author', component:HomeRouteComponent,
    children:[
      {path:'', component:DashboardComponent},
      {path:'revisions', component:RevisionsComponent},
      {path:'authoring', component:AuthoringComponent}
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorRoutingModule { }
