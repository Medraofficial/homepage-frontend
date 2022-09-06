import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandComponent } from './band/band.component';
import { BandmemberComponent } from './bandmember/bandmember.component';
import { MerchComponent } from './merch/merch.component';
import { MusicComponent } from './music/music.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {path: '', component: NewsComponent},
  {path: 'news', component: NewsComponent},
  {path: 'music', component: MusicComponent},
  {path: 'merch', component: MerchComponent},
  {path: 'band', component: BandComponent},
  {path: 'band/member', component: BandmemberComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
