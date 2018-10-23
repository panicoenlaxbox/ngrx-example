import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Customer } from '../../store/customer.model';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';
import { Table } from 'primeng/table';
import { Store } from '@ngrx/store';
import * as fromCustomers from '../../store/customers.actions';
import { CustomersState } from '../../store/customers.state';
import { State, CrmState } from '../../store/reducers';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit, OnDestroy {
  dataSource: Customer[];
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
      { field: 'age', header: 'Age' },
      { field: 'company', header: 'Company' },
      { field: 'email', header: 'Email' },
      { field: 'phone', header: 'Phone' },
      { field: 'address', header: 'Address' },
    ];
    this.table.sortField = this.frozenCols[0].field;
    this.subscription$ = this.store.select((state: State) => state.crm.customers).subscribe((customers: CustomersState) => {
      if (!customers.loaded || !this.onLazyLoadEvent) {
        return;
      }
      this.dataSource = customers.customers;
      this.data = this.dataSource.slice(this.onLazyLoadEvent.first, this.onLazyLoadEvent.first + this.onLazyLoadEvent.rows);
      this.totalRecords = this.dataSource.length;
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
      this.store.dispatch(new fromCustomers.LoadCustomersAction());
    }, 1000);
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
