import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as fromSuppliers from '../actions/suppliers.actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { SuppliersService } from '../../services/suppliers.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SuppliersResponse } from '../../models/suppliers/suppliers-response.model';

@Injectable()
export class SuppliersEffects {
    constructor(private actions$: Actions, private suppliersService: SuppliersService) {
    }

    @Effect()
    load$ = this.actions$.ofType(fromSuppliers.LOAD_SUPPLIERS).pipe(
        switchMap((action: fromSuppliers.LoadSuppliersAction) => {
            return this.suppliersService.get(action.payload.first, action.payload.rows).pipe(
                map((response: SuppliersResponse) => {
                    return new fromSuppliers.LoadSuppliersSuccessAction(response);
                }),
                catchError((error: HttpErrorResponse) => {
                    return of(new fromSuppliers.LoadSuppliersFailAction(error));
                })
            );
        })
    );
}
