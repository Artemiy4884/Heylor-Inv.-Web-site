import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ActivitiesPageComponent } from './activities-page/activities-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TopBannerComponent } from './about-page/top-banner/top-banner.component';
import {HomePageModule} from "./home-page/home-page.module";
import {HeaderModule} from "./header/header.module";

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    ActivitiesPageComponent,
    ContactPageComponent,
    FooterComponent,
    TopBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
