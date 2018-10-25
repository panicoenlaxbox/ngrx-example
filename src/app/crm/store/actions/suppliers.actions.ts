import { Action } from '@ngrx/store';
import { Supplier } from '../../models/supplier.model';
import { HttpErrorResponse } from '@angular/common/http';

export const LOAD_SUPPLIERS = '[Suppliers] Load';
export const LOAD_SUPPLIERS_SUCCESS = '[Suppliers] Success';
export const LOAD_SUPPLIERS_FAIL = '[Suppliers] Fail';

export class LoadSuppliersAction implements Action {
    readonly type = LOAD_SUPPLIERS;
}

export class LoadSuppliersSuccessAction implements Action {
    readonly type = LOAD_SUPPLIERS_SUCCESS;
    constructor(public payload: Supplier[]) { }
}

export class LoadSuppliersFailAction implements Action {
    readonly type = LOAD_SUPPLIERS_FAIL;
    constructor(public payload: HttpErrorResponse) { }
}

export type SuppliersActions = LoadSuppliersAction | LoadSuppliersSuccessAction | LoadSuppliersFailAction;
