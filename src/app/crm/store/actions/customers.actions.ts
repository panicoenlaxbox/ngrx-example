import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { CustomersResponse } from '../../models/customers/customers-response.model';
import { CustomersRequest } from '../../models/customers/customers-request.model';

export const LOAD_CUSTOMERS = '[Customers] Load';
export const LOAD_CUSTOMERS_SUCCESS = '[Customers] Success';
export const LOAD_CUSTOMERS_FAIL = '[Customers] Fail';

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

export type CustomersActions = LoadCustomersAction | LoadCustomersSuccessAction | LoadCustomersFailAction;
