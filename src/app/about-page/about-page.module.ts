import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutPageComponent} from "./about-page.component";
import {TopBannerComponent} from "./top-banner/top-banner.component";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [
    AboutPageComponent,
    TopBannerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule
  ],
  exports: [
    AboutPageComponent
  ]
})
export class AboutPageModule { }
