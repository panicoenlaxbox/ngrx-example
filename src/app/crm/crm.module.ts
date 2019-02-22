import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrmRoutingModule } from './crm-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducers';
import { CrmComponent } from './crm.component';
import { TableModule } from 'primeng/table';
import { CustomersListComponent } from './components/containers/customers-list/customers-list.component';
import { Effects } from './store/effects';
import { SharedModule } from '../shared/shared.module';
import { CustomerComponent } from './components/containers/customer/customer.component';


@NgModule({
  imports: [
    CommonModule,
    CrmRoutingModule,
    TableModule,
    StoreModule.forFeature('crm', reducers),
    EffectsModule.forFeature(Effects),
    SharedModule
  ],
  declarations: [CrmComponent, CustomersListComponent, CustomerComponent],
})
export class CrmModule { }
