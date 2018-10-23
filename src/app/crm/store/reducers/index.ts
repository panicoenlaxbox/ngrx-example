import { storeFreeze } from 'ngrx-store-freeze';
import { MetaReducer, ActionReducerMap } from '@ngrx/store';
import { CustomersState } from '../customers.state';
import { environment } from 'src/environments/environment';
import * as fromCustomers from './customers.reducer';
import * as fromRoot from '../../../reducers';

export interface CrmState {
    customers: CustomersState;
}

// design-time, compile-time, extends or property assigment, whatever you want
export interface State extends fromRoot.State {
    crm: CrmState;
}

export const metaReducers: MetaReducer<CrmState>[] = !environment.production
    ? [storeFreeze]
    : [];

export const reducers: ActionReducerMap<CrmState> = {
    customers: fromCustomers.customersReducer
};
