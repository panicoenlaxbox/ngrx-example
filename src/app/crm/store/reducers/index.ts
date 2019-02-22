import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCustomers from './customers.reducer';
import * as fromRoot from '../../../core/reducers';

export interface CrmState {
    customers: fromCustomers.CustomersState;
}

export interface CrmFeatureState extends fromRoot.RootState {
    crm: CrmState;
}

export const reducers: ActionReducerMap<CrmState> = {
    customers: fromCustomers.customersReducer
};

export const getCrmState = createFeatureSelector<CrmFeatureState, CrmState>('crm');

export const getCustomersState = createSelector(
    getCrmState,
    (state: CrmState) => state.customers
);
