import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplesRoutingModule } from './examples-routing.module';
import { GrandparentComponent } from './input-output-hell/grandparent/grandparent.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './input-output-hell/parent/parent.component';
import { ChildComponent } from './input-output-hell/child/child.component';
import { Grandparent2Component } from './input-output-with-service/grandparent2/grandparent2.component';
import { Parent2Component } from './input-output-with-service/parent2/parent2.component';
import { Child2Component } from './input-output-with-service/child2/child2.component';

@NgModule({
  declarations: [GrandparentComponent, ParentComponent, ChildComponent, Grandparent2Component, Parent2Component, Child2Component],
  imports: [
    CommonModule,
    ExamplesRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ExamplesModule { }
