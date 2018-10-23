import { Customer } from './customer.model';

export interface CustomersState {
    customers: Customer[];
    loading: boolean;
    loaded: boolean;
    error: any;
}
