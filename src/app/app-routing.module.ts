import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableWithServiceComponent } from './table-with-service/table-with-service.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TableWithStoreComponent } from './table-with-store/table-with-store.component';

const routes: Routes = [
  { path: 'table-with-service', component: TableWithServiceComponent },
  { path: 'table-with-store', component: TableWithStoreComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
