import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Warehouse } from '../store/models/warehouse.model';
import { WarehousesResponse } from '../models/warehouses/warehouses-response.model';
import { ApiBaseService } from '../../shared/api-base.service';

@Injectable({
    providedIn: 'root'
})
export class WarehousesService extends ApiBaseService<WarehousesResponse, Warehouse> {
    constructor(http: HttpClient) {
        super(http, 'customers.json');
    }
}
