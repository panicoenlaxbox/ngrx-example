import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';

@Injectable({
    providedIn: 'root'
})
export class CustomersService {
    constructor(private http: HttpClient) {
    }

    public get(): Observable<Customer[]> {
        return this.http.get<Customer[]>('./assets/customers.json');
    }
}
