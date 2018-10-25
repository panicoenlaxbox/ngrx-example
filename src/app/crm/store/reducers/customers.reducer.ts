import * as fromCustomers from '../actions/customers.actions';
import { Customer } from '../../models/customers/customer.model';

export interface State {
    data: Customer[];
    first: number;
    rows: number;
    totalRecords: number;
    loading: boolean;
    loaded: boolean;
    error: any;
}

const initialState: State = {
    data: [],
    first: 0,
    rows: 0,
    totalRecords: 0,
    loading: false,
    loaded: false,
    error: null
};

export function customersReducer(state = initialState, action: fromCustomers.CustomersActions): State {
    switch (action.type) {
        case fromCustomers.LOAD_CUSTOMERS:
            return {
                data: [],
                totalRecords: 0,
                first: action.payload.first,
                rows: action.payload.rows,
                loading: false,
                loaded: false,
                error: null
            };
        case fromCustomers.LOAD_CUSTOMERS_SUCCESS:
            return {
                data: action.payload.data,
                totalRecords: action.payload.totalRecords,
                first: state.first,
                rows: state.rows,
                loading: false,
                loaded: true,
                error: null
            };
        case fromCustomers.LOAD_CUSTOMERS_FAIL:
            return {
                data: [],
                totalRecords: 0,
                first: 0,
                rows: 0,
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
