import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrmRoutingModule } from './crm-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducers';
import { CustomersEffects } from './store/effects/customers.effects';
import { CrmComponent } from './crm.component';
import { TableModule } from 'primeng/table';
import { CustomersListComponent } from './components/containers/customers-list/customers-list.component';
import { SuppliersListComponent } from './components/containers/suppliers-list/suppliers-list.component';
import { SuppliersEffects } from './store/effects/suppliers.effects';


@NgModule({
  imports: [
    CommonModule,
    CrmRoutingModule,
    TableModule,
    StoreModule.forFeature('crm', reducers),
    EffectsModule.forFeature([CustomersEffects, SuppliersEffects]),
  ],
  declarations: [CrmComponent, CustomersListComponent, SuppliersListComponent],
})
export class CrmModule { }
