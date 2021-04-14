import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from "./homepage/homepage.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { MockDataSandboxComponent } from "./mock-data-sandbox/mock-data-sandbox.component";

const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'sandbox', component:MockDataSandboxComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
