import { Loading } from './loading';

export interface Pagination {
  first: number;
  rows: number;
  totalRecords: number;
  loading: Loading;
  error: any;
}


