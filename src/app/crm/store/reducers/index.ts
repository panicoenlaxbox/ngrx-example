import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCustomers from './customer.reducer';
import { RootState } from 'src/app/core/store/reducers';

export interface CrmState {
    customers: fromCustomers.CustomersState;
}

export interface CrmFeatureState extends RootState {
    crm: CrmState;
}

export const reducers: ActionReducerMap<CrmState> = {
    customers: fromCustomers.customersReducer
};

export const getCrmFeatureState = createFeatureSelector<CrmFeatureState, CrmState>('crm');

export const getCustomersState = createSelector(
    getCrmFeatureState,
    (state: CrmState) => state.customers
);
