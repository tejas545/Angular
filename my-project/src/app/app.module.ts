import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { UsersModule } from './users/users.module';
import { HighlightDirective } from './highlight.directive';
import { NeedDataService } from './need-data.service';
import { InsightComponent } from './insight/insight.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HighlightDirective,
    InsightComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
  ],
  providers: [NeedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
