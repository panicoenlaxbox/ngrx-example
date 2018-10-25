import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customers/customer.model';
import { CustomersResponse } from '../models/customers/customers-response.model';
import { ApiBaseService } from './api-base.service';

@Injectable({
    providedIn: 'root'
})
export class CustomersService extends ApiBaseService<CustomersResponse, Customer> {
    constructor(http: HttpClient) {
        super(http, 'customers.json');
    }
}
