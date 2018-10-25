import * as fromSuppliers from '../actions/suppliers.actions';
import { Supplier } from '../../models/supplier.model';

export interface State {
    suppliers: Supplier[];
    loading: boolean;
    loaded: boolean;
    error: any;
}

const initialState: State = {
    suppliers: [],
    loading: false,
    loaded: false,
    error: null
};

export function suppliersReducer(state = initialState, action: fromSuppliers.SuppliersActions): State {
    switch (action.type) {
        case fromSuppliers.LOAD_SUPPLIERS:
            return {
                suppliers: [],
                loading: false,
                loaded: false,
                error: null
            };
        case fromSuppliers.LOAD_SUPPLIERS_SUCCESS:
            return {
                suppliers: action.payload,
                loading: false,
                loaded: true,
                error: null
            };
        case fromSuppliers.LOAD_SUPPLIERS_FAIL:
            return {
                suppliers: [],
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
