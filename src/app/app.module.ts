import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BandComponent } from './band/band.component';
import { NewsComponent } from './news/news.component';
import { MusicComponent } from './music/music.component';
import { MerchComponent } from './merch/merch.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BandComponent,
    NewsComponent,
    MusicComponent,
    MerchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
