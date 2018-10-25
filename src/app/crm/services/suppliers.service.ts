import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from '../models/supplier.model';

@Injectable({
    providedIn: 'root'
})
export class SuppliersService {
    constructor(private http: HttpClient) {
    }

    public get(): Observable<Supplier[]> {
        return this.http.get<Supplier[]>('./assets/suppliers.json');
    }
}
