import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Customer } from '../../../models/customers/customer.model';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';
import { Table } from 'primeng/table';
import { Store } from '@ngrx/store';
import * as fromCustomers from '../../../store/actions/customers.actions';
import { State } from '../../../store/reducers';
import { Subscription } from 'rxjs';
import { CustomersRequest } from 'src/app/crm/models/customers/customers-request.model';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit, OnDestroy {
  data: Customer[];
  totalRecords: number;
  loading = true;
  frozenCols: any[];
  scrollableCols: any[];
  sortField: string;
  frozenColWidth = 300;
  onLazyLoadEvent: LazyLoadEvent;

  @ViewChild(Table)
  table: Table;

  filterRowHeight = 50;
  subscription$: Subscription;

  constructor(private store: Store<State>) {

  }

  ngOnInit(): void {
    this.frozenCols = [
      { field: 'id', header: 'Id', filterMatchMode: 'equals' },
      { field: 'name', header: 'Name' }
    ];
    this.scrollableCols = [
      { field: 'phone', header: 'Phone' },
      { field: 'address', header: 'Address' }
    ];
    this.table.sortField = this.frozenCols[0].field;
    this.subscription$ = this.store.select((state: State) => state.crm.customers).subscribe(customersState => {
      if (!customersState.loaded || !this.onLazyLoadEvent) {
        return;
      }
      this.data = customersState.customers;
      this.totalRecords = customersState.totalRecords;
      this.loading = false;
    });
  }

  getFrozenWidth(): string {
    return (this.frozenColWidth * this.frozenCols.length) + 'px';
  }

  rowTrackBy(index: number, item: any) {
    return (<Customer>item).id;
  }

  onLazyLoad(event: LazyLoadEvent) {
    if (this.data && this.loading) {
      return;
    }

    console.log(event);

    this.loading = true;

    setTimeout(() => {
      this.onLazyLoadEvent = event;
      this.store.dispatch(new fromCustomers.LoadCustomersAction(<CustomersRequest>{
        first: event.first,
        rows: event.rows
      }));
    }, 1000);
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
