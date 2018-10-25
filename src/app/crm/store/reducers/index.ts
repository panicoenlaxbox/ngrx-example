import { storeFreeze } from 'ngrx-store-freeze';
import { MetaReducer, ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as fromCustomers from './customers.reducer';
import * as fromSuppliers from './suppliers.reducer';
import * as fromRoot from '../../../reducers';

export interface CrmState {
    customers: fromCustomers.State;
    suppliers: fromSuppliers.State;
}

export interface State extends fromRoot.State {
    crm: CrmState;
}

export const metaReducers: MetaReducer<CrmState>[] = !environment.production
    ? [storeFreeze]
    : [];

export const reducers: ActionReducerMap<CrmState> = {
    customers: fromCustomers.customersReducer,
    suppliers: fromSuppliers.suppliersReducer
};

export const getCrmState = createFeatureSelector<State, CrmState>('crm');

export const getCustomersState = createSelector(
    getCrmState,
    (state: CrmState) => state.customers
);

export const getSuppliersState = createSelector(
    getCrmState,
    (state: CrmState) => state.suppliers
);
