import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersListComponent } from './components/containers/customers-list/customers-list.component';
import { SuppliersListComponent } from './components/containers/suppliers-list/suppliers-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'customers' },
      { path: 'customers', component: CustomersListComponent },
      { path: 'suppliers', component: SuppliersListComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmRoutingModule { }
