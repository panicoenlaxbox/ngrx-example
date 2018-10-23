import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../user';
import { LazyLoadEvent } from 'primeng/components/common/lazyloadevent';
import { Table } from 'primeng/table';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-table-with-store',
  templateUrl: './table-with-store.component.html',
  styleUrls: ['./table-with-store.component.scss']
})
export class TableWithStoreComponent implements OnInit {
  dataSource: User[];
  data: User[];
  totalRecords: number;
  loading = true;
  frozenCols: any[];
  scrollableCols: any[];
  sortField: string;
  frozenColWidth = 300;

  @ViewChild(Table)
  table: Table;

  filterRowHeight = 50;

  constructor(private usersService: UsersService) {

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
  }

  getFrozenWidth(): string {
    return (this.frozenColWidth * this.frozenCols.length) + 'px';
  }

  rowTrackBy(index: number, item: any) {
    return (<User>item).id;
  }

  onLazyLoad(event: LazyLoadEvent) {
    if (this.data && this.loading) {
      return;
    }

    console.log(event);

    this.loading = true;

    setTimeout(() => {
      this.usersService.get().subscribe((users: User[]) => {
        this.dataSource = users;
        this.data = this.dataSource.slice(event.first, event.first + event.rows);
        this.totalRecords = this.dataSource.length;
        this.loading = false;
      });
    }, 1000);
  }
}
