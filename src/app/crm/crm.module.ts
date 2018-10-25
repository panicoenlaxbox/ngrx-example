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
import { SuppliersListComponent } from './components/containers/suppliers-list/suppliers-list.component';


@NgModule({
  imports: [
    CommonModule,
    CrmRoutingModule,
    TableModule,
    StoreModule.forFeature('crm', reducers),
    EffectsModule.forFeature(Effects),
  ],
  declarations: [CrmComponent, CustomersListComponent, SuppliersListComponent],
})
export class CrmModule { }
