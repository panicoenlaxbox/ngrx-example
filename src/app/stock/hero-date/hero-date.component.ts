import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CrmFeatureState, getCustomersState } from 'src/app/crm/store/reducers';
import { Subscription } from 'rxjs';
import { } from 'rxjs/operators';
import { Customer } from 'src/app/crm/store/models/customer.model';
import { CustomersState } from 'src/app/crm/store/reducers/customer.reducer';

@Component({
  selector: 'app-hero-date',
  templateUrl: './hero-date.component.html',
  styleUrls: ['./hero-date.component.scss']
})
export class HeroDateComponent implements OnInit, OnDestroy {
  subscription$: Subscription;
  customer: Customer;

  constructor(private store: Store<CrmFeatureState>) { }

  ngOnInit() {
    this.subscription$ = this.store.pipe(select(getCustomersState)).subscribe((state: CustomersState) => {
      this.customer = state.selected;
    });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

}
