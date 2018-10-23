import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrmComponent } from './crm.component';
import { CustomersComponent } from './containers/customers/customers.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'customers' },
      { path: 'customers', component: CustomersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrmRoutingModule { }
