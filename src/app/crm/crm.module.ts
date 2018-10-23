import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrmRoutingModule } from './crm-routing.module';
import { CustomersComponent } from './containers/customers/customers.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducers';
import { CustomersEffects } from './store/customers.effects';
import { CrmComponent } from './crm.component';
import { TableModule } from 'primeng/table';


@NgModule({
  imports: [
    CommonModule,
    CrmRoutingModule,
    TableModule,
    StoreModule.forFeature('crm', reducers),
    EffectsModule.forFeature([CustomersEffects]),
  ],
  declarations: [CrmComponent, CustomersComponent],
})
export class CrmModule { }
