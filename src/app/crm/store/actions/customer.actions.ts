import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { CustomersResponse } from '../../models/customers/customers-response.model';
import { CustomersRequest } from '../../models/customers/customers-request.model';
import { Customer } from '../models/customer.model';

export const LOAD_CUSTOMERS = '[Customers] Load';
export const LOAD_CUSTOMERS_SUCCESS = '[Customers] Success';
export const LOAD_CUSTOMERS_FAIL = '[Customers] Fail';
export const SELECT_CUSTOMER = '[Customers] Select';

export class LoadCustomersAction implements Action {
    readonly type = LOAD_CUSTOMERS;
    constructor(public payload: CustomersRequest) { }
}

export class LoadCustomersSuccessAction implements Action {
    readonly type = LOAD_CUSTOMERS_SUCCESS;
    constructor(public payload: CustomersResponse) { }
}

export class LoadCustomersFailAction implements Action {
    readonly type = LOAD_CUSTOMERS_FAIL;
    constructor(public payload: HttpErrorResponse) { }
}

export class SelectCustomerAction implements Action {
    readonly type = SELECT_CUSTOMER;
    constructor(public payload: Customer) { }
}

export type CustomersActions = LoadCustomersAction | LoadCustomersSuccessAction | LoadCustomersFailAction | SelectCustomerAction;
