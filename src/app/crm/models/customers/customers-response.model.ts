import { Customer } from '../../store/models/customer.model';
import { ResponseBase } from '../../../shared/response-base';

export interface CustomersResponse extends ResponseBase<Customer> {
}
