import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { SuppliersResponse } from '../../models/suppliers/suppliers-response.model';
import { SuppliersRequest } from '../../models/suppliers/suppliers-request.model';

export const LOAD_SUPPLIERS = '[Suppliers] Load';
export const LOAD_SUPPLIERS_SUCCESS = '[Suppliers] Success';
export const LOAD_SUPPLIERS_FAIL = '[Suppliers] Fail';

export class LoadSuppliersAction implements Action {
    readonly type = LOAD_SUPPLIERS;
    constructor(public payload: SuppliersRequest) { }
}

export class LoadSuppliersSuccessAction implements Action {
    readonly type = LOAD_SUPPLIERS_SUCCESS;
    constructor(public payload: SuppliersResponse) { }
}

export class LoadSuppliersFailAction implements Action {
    readonly type = LOAD_SUPPLIERS_FAIL;
    constructor(public payload: HttpErrorResponse) { }
}

export type SuppliersActions = LoadSuppliersAction | LoadSuppliersSuccessAction | LoadSuppliersFailAction;
