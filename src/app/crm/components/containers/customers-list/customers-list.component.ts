import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Customer } from '../../../store/models/customer.model';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';
import { Table } from 'primeng/table';
import { Store } from '@ngrx/store';
import * as fromCustomers from '../../../store/actions/customer.actions';
import { CrmFeatureState, getCustomersState } from '../../../store/reducers';
import { Subscription } from 'rxjs';
import { CustomersRequest } from 'src/app/crm/models/customers/customers-request.model';
import { ModalService } from 'src/app/shared/modal.service';
import { CustomersState } from 'src/app/crm/store/reducers/customer.reducer';

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

  subscription$: Subscription;

  selectedCustomer: Customer;

  constructor(private store: Store<CrmFeatureState>, private modalService: ModalService) {

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
    this.subscription$ = this.store.select(getCustomersState).subscribe((state: CustomersState) => {
      if (!state.pagination.loading.loaded || !this.onLazyLoadEvent) {
        return;
      }
      this.data = state.data;
      this.totalRecords = state.pagination.totalRecords;
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

  onRowSelect(event: any) {
    this.store.dispatch(new fromCustomers.SelectCustomerAction(this.selectedCustomer));
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
