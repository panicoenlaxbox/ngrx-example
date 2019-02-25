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
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { Grandparent3Component } from './input-output-with-store/grandparent3/grandparent3.component';
import { Parent3Component } from './input-output-with-store/parent3/parent3.component';
import { Child3Component } from './input-output-with-store/child3/child3.component';

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
