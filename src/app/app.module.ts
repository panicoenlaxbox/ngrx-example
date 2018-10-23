import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { TableWithServiceComponent } from './table-with-service/table-with-service.component';
import { TableWithStoreComponent } from './table-with-store/table-with-store.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    TableWithServiceComponent,
    TableWithStoreComponent,
    PageNotFoundComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    TableModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
