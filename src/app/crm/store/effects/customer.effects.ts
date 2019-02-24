import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as fromCustomers from '../actions/customer.actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { CustomersService } from '../../services/customers.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CustomersResponse } from '../../models/customers/customers-response.model';

@Injectable()
export class CustomersEffects {
    constructor(private actions$: Actions, private customersService: CustomersService) {
    }

    @Effect()
    load$ = this.actions$.ofType(fromCustomers.LOAD_CUSTOMERS).pipe(
        switchMap((action: fromCustomers.LoadCustomersAction) => {
            return this.customersService.get(action.payload.first, action.payload.rows).pipe(
                map((response: CustomersResponse) => {
                    return new fromCustomers.LoadCustomersSuccessAction(response);
                }),
                catchError((error: HttpErrorResponse) => {
                    return of(new fromCustomers.LoadCustomersFailAction(error));
                })
            );
        })
    );
}
