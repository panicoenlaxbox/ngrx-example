import { Action } from '@ngrx/store';
import { Customer } from '../models/customer.model';

export const SELECT_CUSTOMER = '[Select] Customer';

export class SelectCustomerAction implements Action {
    readonly type = SELECT_CUSTOMER;
    constructor(public payload: Customer) { }
}

export type SelectionActions = SelectCustomerAction;
