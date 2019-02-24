import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCustomers from './customer.reducer';
import * as fromSelection from './selection.reducer';

export interface CrmState {
    customers: fromCustomers.CustomersState;
    selection: fromSelection.SelectionState;
}

export interface CrmFeatureState {
    crm: CrmState;
}

export const reducers: ActionReducerMap<CrmState> = {
    customers: fromCustomers.customersReducer,
    selection: fromSelection.selectionReducer
};

export const getCrmState = createFeatureSelector<CrmFeatureState, CrmState>('crm');

export const getCustomersState = createSelector(
    getCrmState,
    (state: CrmState) => state.customers
);

export const getSelectionState = createSelector(
  getCrmState,
  (state: CrmState) => state.selection
);
