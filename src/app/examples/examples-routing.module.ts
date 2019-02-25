import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrandparentComponent } from './input-output-hell/grandparent/grandparent.component';
import { Grandparent2Component } from './input-output-with-service/grandparent2/grandparent2.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'input-output-hell' },
      { path: 'input-output-hell', component: GrandparentComponent },
      { path: 'input-output-with-service', component: Grandparent2Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule { }
