import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Supplier } from '../models/suppliers/supplier.model';
import { SuppliersResponse } from '../models/suppliers/suppliers-response.model';
import { ApiBaseService } from './api-base.service';

@Injectable({
    providedIn: 'root'
})
export class SuppliersService extends ApiBaseService<SuppliersResponse, Supplier> {
    constructor(http: HttpClient) {
        super(http, 'suppliers.json');
    }
}
