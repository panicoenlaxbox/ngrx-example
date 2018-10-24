import * as fromCustomers from '../actions/customers.actions';
import { Customer } from '../../models/customer.model';

export interface State {
    customers: Customer[];
    loading: boolean;
    loaded: boolean;
    error: any;
}

const initialState: State = {
    customers: [],
    loading: false,
    loaded: false,
    error: null
};

export function customersReducer(state = initialState, action: fromCustomers.CustomersActions): State {
    switch (action.type) {
        case fromCustomers.LOAD_CUSTOMERS:
            return {
                customers: [],
                loading: false,
                loaded: false,
                error: null
            };
        case fromCustomers.LOAD_CUSTOMERS_SUCCESS:
            return {
                customers: action.payload,
                loading: false,
                loaded: true,
                error: null
            };
        case fromCustomers.LOAD_CUSTOMERS_FAIL:
            return {
                customers: [],
                loading: false,
                loaded: true,
                error: {
                    status: action.payload.status,
                    message: action.payload.message,
                    url: action.payload.url
                }
            };
        default:
            return state;
    }
}
