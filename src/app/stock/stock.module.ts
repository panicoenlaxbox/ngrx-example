import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HeroDateComponent } from './hero-date/hero-date.component';
import { WarehouseComponent } from './warehouse/warehouse.component';

@NgModule({
  declarations: [HeroDateComponent, WarehouseComponent],
  imports: [
    CommonModule,
    StockRoutingModule,
    SharedModule
  ]
})
export class StockModule { }
