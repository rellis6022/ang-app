import { NgModule, ErrorHandler} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, } from '@angular/common/http';
import { GlobalErrorHandler } from './global-error-handler';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicationsModule } from "./publications/publications.module";
import { AuthorModule } from "./author/author.module";
import { UiLibModule } from "./ui-lib/ui-lib.module";
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Sandbox } from './sandbox/sandbox';
import { BootstrapRefComponent } from './bootstrap-ref/bootstrap-ref.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NotFoundComponent,
    Sandbox,
    BootstrapRefComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UiLibModule,
    PublicationsModule,
    AuthorModule,
    AppRoutingModule, //Routing must be listed last!
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }