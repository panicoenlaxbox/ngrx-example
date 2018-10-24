import { Action } from '@ngrx/store';
import { Customer } from '../../models/customer.model';
import { HttpErrorResponse } from '@angular/common/http';

export const LOAD_CUSTOMERS = '[Customers] Load';
export const LOAD_CUSTOMERS_SUCCESS = '[Customers] Success';
export const LOAD_CUSTOMERS_FAIL = '[Customers] Fail';

export class LoadCustomersAction implements Action {
    readonly type = LOAD_CUSTOMERS;
}

export class LoadCustomersSuccessAction implements Action {
    readonly type = LOAD_CUSTOMERS_SUCCESS;
    constructor(public payload: Customer[]) { }
}

export class LoadCustomersFailAction implements Action {
    readonly type = LOAD_CUSTOMERS_FAIL;
    constructor(public payload: HttpErrorResponse) { }
}

export type CustomersActions = LoadCustomersAction | LoadCustomersSuccessAction | LoadCustomersFailAction;
