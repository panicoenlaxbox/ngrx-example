import * as fromSelection from '../actions/selection.actions';
import { Customer } from '../models/customer.model';

export interface SelectionState {
  customer: Customer;
}

const initialState: SelectionState = {
  customer: null
};

export function selectionReducer(state = initialState, action: fromSelection.SelectionActions): SelectionState {
  switch (action.type) {
    case fromSelection.SELECT_CUSTOMER:
      return {
        ...state,
        customer: action.payload
      };
    default:
      return state;
  }
}
