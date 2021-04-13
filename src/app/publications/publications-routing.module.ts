import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ResourcesComponent } from "./resources/resources.component";
import { ArticleComponent } from "./article/article.component";

const routes: Routes = [
  {
    path:'publications', 
    component:HomeComponent,
    children:[
      {path:'resources', component:ResourcesComponent},
      {path:'article', component:ArticleComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicationsRoutingModule { }
