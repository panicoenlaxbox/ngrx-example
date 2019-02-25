import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { WelcomeComponent } from './core/components/welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'crm', loadChildren: './crm/crm.module#CrmModule' },
  { path: 'stock', loadChildren: './stock/stock.module#StockModule' },
  { path: 'examples', loadChildren: './examples/examples.module#ExamplesModule' },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
