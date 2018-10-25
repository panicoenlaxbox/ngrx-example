import { Customer } from './customer.model';

export interface CustomersResponse {
    totalRecords: number;
    data: Customer[];
}
