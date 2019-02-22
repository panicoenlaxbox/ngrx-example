import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroDateComponent } from './hero-date/hero-date.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'hero-date' },
      { path: 'hero-date', component: HeroDateComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockRoutingModule { }
