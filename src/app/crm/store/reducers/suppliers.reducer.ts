import * as fromSuppliers from '../actions/suppliers.actions';
import { Supplier } from '../../models/suppliers/supplier.model';

export interface State {
    data: Supplier[];
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

export function customersReducer(state = initialState, action: fromSuppliers.SuppliersActions): State {
    switch (action.type) {
        case fromSuppliers.LOAD_SUPPLIERS:
            return {
                data: [],
                totalRecords: 0,
                first: action.payload.first,
                rows: action.payload.rows,
                loading: false,
                loaded: false,
                error: null
            };
        case fromSuppliers.LOAD_SUPPLIERS_SUCCESS:
            return {
                data: action.payload.data,
                totalRecords: action.payload.totalRecords,
                first: state.first,
                rows: state.rows,
                loading: false,
                loaded: true,
                error: null
            };
        case fromSuppliers.LOAD_SUPPLIERS_FAIL:
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
