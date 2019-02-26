import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrandparentComponent } from './example-input-output/grandparent/grandparent.component';
import { Grandparent2Component } from './example-service/grandparent2/grandparent2.component';
import { Grandparent3Component } from './example-ngrx/grandparent3/grandparent3.component';
import { Grandparent4Component } from './example-store-service/grandparent4/grandparent4.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'example-input-output' },
      { path: 'example-input-output', component: GrandparentComponent },
      { path: 'example-service', component: Grandparent2Component },
      { path: 'example-ngrx', component: Grandparent3Component },
      { path: 'example-store-service', component: Grandparent4Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule { }
