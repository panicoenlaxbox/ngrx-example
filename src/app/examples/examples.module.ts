import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplesRoutingModule } from './examples-routing.module';
import { GrandparentComponent } from './example-input-output/grandparent/grandparent.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './example-input-output/parent/parent.component';
import { ChildComponent } from './example-input-output/child/child.component';
import { Grandparent2Component } from './example-service/grandparent2/grandparent2.component';
import { Parent2Component } from './example-service/parent2/parent2.component';
import { Child2Component } from './example-service/child2/child2.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { Grandparent3Component } from './example-ngrx/grandparent3/grandparent3.component';
import { Parent3Component } from './example-ngrx/parent3/parent3.component';
import { Child3Component } from './example-ngrx/child3/child3.component';

@NgModule({
// tslint:disable-next-line: max-line-length
  declarations: [GrandparentComponent, ParentComponent, ChildComponent, Grandparent2Component, Parent2Component, Child2Component, Grandparent3Component, Parent3Component, Child3Component],
  imports: [
    CommonModule,
    ExamplesRoutingModule,
    SharedModule,
    FormsModule,
    StoreModule.forFeature('examples', reducers),
  ]
})
export class ExamplesModule { }
