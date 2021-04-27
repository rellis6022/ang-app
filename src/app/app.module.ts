import { NgModule, ErrorHandler} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
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
import { SplashImageComponent } from './splash-image/splash-image.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { AddClassDirective } from './directives/add-class.directive';
import { TruncatePipe } from './pipes/truncate.pipe';
import { TitlecasePipe } from './pipes/titlecase.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NotFoundComponent,
    Sandbox,
    BootstrapRefComponent,
    SplashImageComponent,
    LoginFormComponent,
    PageHeaderComponent,
    AddClassDirective,
    TruncatePipe,
    TitlecasePipe,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
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