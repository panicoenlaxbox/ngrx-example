import * as fromCustomers from '../actions/customer.actions';
import { Customer } from '../models/customer.model';
import { Pagination } from 'src/app/shared/pagination';

export interface CustomersState {
  data: Customer[];
  pagination: Pagination;
}

const initialState: CustomersState = {
  data: [],
  pagination: {
    first: 0,
    rows: 0,
    totalRecords: 0,
    loading: {
      loading: false,
      loaded: false
    },
    error: null
  }
};

export function customersReducer(state = initialState, action: fromCustomers.CustomersActions): CustomersState {
  switch (action.type) {
    case fromCustomers.LOAD_CUSTOMERS:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          first: action.payload.first,
          rows: action.payload.rows,
          loading: {
            ...state.pagination.loading,
            loading: true
          }
        }
      };
    case fromCustomers.LOAD_CUSTOMERS_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        pagination: {
          ...state.pagination,
          totalRecords: action.payload.totalRecords,
          loading: {
            loading: false,
            loaded: true
          }
        }
      };
    case fromCustomers.LOAD_CUSTOMERS_FAIL:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          loading: {
            loading: false,
            loaded: true,
          },
          error: {
            status: action.payload.status,
            message: action.payload.message,
            url: action.payload.url
          }
        }
      };
    default:
      return state;
  }
}
