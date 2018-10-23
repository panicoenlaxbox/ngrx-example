import * as fromCustomers from '../customers.actions';
import { CustomersState } from '../customers.state';

const initialState: CustomersState = {
    customers: [],
    loading: false,
    loaded: false,
    error: null
};

export function customersReducer(state = initialState, action: fromCustomers.CustomersActions): CustomersState {
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
