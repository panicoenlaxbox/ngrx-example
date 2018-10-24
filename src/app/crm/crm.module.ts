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


@NgModule({
  imports: [
    CommonModule,
    CrmRoutingModule,
    TableModule,
    StoreModule.forFeature('crm', reducers),
    EffectsModule.forFeature([CustomersEffects]),
  ],
  declarations: [CrmComponent, CustomersListComponent],
})
export class CrmModule { }
