import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customers/customer.model';
import { map } from 'rxjs/operators';
import { CustomersResponse } from '../models/customers/customers-response.model';

@Injectable({
    providedIn: 'root'
})
export class CustomersService {
    constructor(private http: HttpClient) {
    }

    public get(): Observable<CustomersResponse>;
    public get(first: number, rows: number): Observable<CustomersResponse>;
    public get(first?: number, rows?: number): Observable<CustomersResponse> {
        return this.http.get<Customer[]>('./assets/customers.json').pipe(
            map((value: Customer[], index: number) => {
                return <CustomersResponse>{
                    totalRecords: value.length,
                    data: first === undefined ? value : value.slice(first, first + rows)
                };
            })
        );
    }
}
