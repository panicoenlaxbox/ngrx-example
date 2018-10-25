import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as fromSuppliers from '../actions/suppliers.actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { SuppliersService } from '../../services/suppliers.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class SuppliersEffects {
    constructor(private actions$: Actions, private suppliersService: SuppliersService) {
    }

    @Effect()
    load$ = this.actions$.ofType(fromSuppliers.LOAD_SUPPLIERS).pipe(
        switchMap(() => {
            return this.suppliersService.get().pipe(
                map(suppliers => {
                    return new fromSuppliers.LoadSuppliersSuccessAction(suppliers);
                }),
                catchError((error: HttpErrorResponse) => {
                    return of(new fromSuppliers.LoadSuppliersFailAction(error));
                })
            );
        })
    );
}
