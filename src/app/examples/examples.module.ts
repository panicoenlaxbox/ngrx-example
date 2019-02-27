import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplesRoutingModule } from './examples-routing.module';
import { GrandparentComponent } from './example-input-output/components/grandparent/grandparent.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './example-input-output/components/parent/parent.component';
import { ChildComponent } from './example-input-output/components/child/child.component';
import { Grandparent2Component } from './example-service/components/grandparent2/grandparent2.component';
import { Parent2Component } from './example-service/components/parent2/parent2.component';
import { Child2Component } from './example-service/components/child2/child2.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './example-ngrx/store/reducers';
import { Grandparent3Component } from './example-ngrx/components/grandparent3/grandparent3.component';
import { Parent3Component } from './example-ngrx/components/parent3/parent3.component';
import { Child3Component } from './example-ngrx/components/child3/child3.component';
import { Grandparent4Component } from './example-store-service/components/grandparent4/grandparent4.component';
import { Parent4Component } from './example-store-service/components/parent4/parent4.component';
import { Child4Component } from './example-store-service/components/child4/child4.component';
import { Grandparent5Component } from './example-ngxs/components/grandparent5/grandparent5.component';
import { Parent5Component } from './example-ngxs/components/parent5/parent5.component';
import { Child5Component } from './example-ngxs/components/child5/child5.component';
import { NgxsModule } from '@ngxs/store';
import { ExampleState2 } from './example-ngxs/store/example.state';
import { ExampleStore } from './example-store-service/store/example.store';

@NgModule({
// tslint:disable-next-line: max-line-length
  declarations: [GrandparentComponent, ParentComponent, ChildComponent, Grandparent2Component, Parent2Component, Child2Component, Grandparent3Component, Parent3Component, Child3Component, Grandparent4Component, Parent4Component, Child4Component, Grandparent5Component, Parent5Component, Child5Component],
  imports: [
    CommonModule,
    ExamplesRoutingModule,
    SharedModule,
    FormsModule,
    StoreModule.forFeature('examples', reducers),
    NgxsModule.forFeature([ExampleState2])
  ],
  providers: [ExampleStore]

})
export class ExamplesModule { }
