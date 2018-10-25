import { Supplier } from './supplier.model';

export interface SuppliersResponse {
    totalRecords: number;
    data: Supplier[];
}
