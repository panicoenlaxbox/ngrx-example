import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as fromCustomers from './customers.actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { CustomersService } from './customers.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class CustomersEffects {
    constructor(private actions$: Actions, private customersService: CustomersService) {
    }

    @Effect()
    load$ = this.actions$.ofType(fromCustomers.LOAD_CUSTOMERS).pipe(
        switchMap(() => {
            return this.customersService.get().pipe(
                map(customers => {
                    return new fromCustomers.LoadCustomersSuccessAction(customers);
                }),
                catchError((error: HttpErrorResponse) => {
                    return of(new fromCustomers.LoadCustomersFailAction(error));
                })
            );
        })
    );
}
