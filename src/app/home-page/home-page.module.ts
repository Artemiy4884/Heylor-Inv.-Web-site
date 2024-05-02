import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {HomePageComponent} from "./home-page.component";
import { HomePageTopBannerComponent } from './home-page-top-banner/home-page-top-banner.component';
import { WhoBannerComponent } from './who-banner/who-banner.component';
import { SpecialBlockComponent } from './special-block/special-block.component';



@NgModule({
  declarations: [
    HomePageComponent,
    HomePageTopBannerComponent,
    WhoBannerComponent,
    SpecialBlockComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
