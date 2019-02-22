import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { CrmFeatureState, getSelectionState } from 'src/app/crm/store/reducers';
import { Subscription } from 'rxjs';
import { SelectionState } from 'src/app/crm/store/reducers/selection.reducer';
import { Customer } from 'src/app/crm/models/customers/customer.model';

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
    this.subscription$ = this.store.select(getSelectionState).subscribe((state: SelectionState) => {
      this.customer = state.customer;
    });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

}
