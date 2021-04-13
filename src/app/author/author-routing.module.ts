import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RevisionsComponent } from "./revisions/revisions.component";
import { AuthoringComponent } from "./authoring/authoring.component";

const routes: Routes = [
  {path:'author', component:DashboardComponent,
    children:[
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
