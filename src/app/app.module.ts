import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './contents/content.component';
import { HeadlinesComponent } from './headlines/headline.component';
import { HeaderComponent } from './header/header.component';
import { ErrorComponent } from './error/error.component';
import { SkillsComponent } from './skills/skills.component';
import { AuthInterceptorService } from './security/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    ContentComponent,
    HeadlinesComponent,
    HeaderComponent,
    ErrorComponent,
    SkillsComponent,
    ],
    
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }