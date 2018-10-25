import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from '../models/suppliers/supplier.model';
import { map } from 'rxjs/operators';
import { SuppliersResponse } from '../models/suppliers/suppliers-response.model';

@Injectable({
    providedIn: 'root'
})
export class SuppliersService {
    constructor(private http: HttpClient) {
    }

    public get(): Observable<SuppliersResponse>;
    public get(first: number, rows: number): Observable<SuppliersResponse>;
    public get(first?: number, rows?: number): Observable<SuppliersResponse> {
        return this.http.get<Supplier[]>('./assets/suppliers.json').pipe(
            map((value: Supplier[], index: number) => {
                return <SuppliersResponse>{
                    totalRecords: value.length,
                    data: first === undefined ? value : value.slice(first, first + rows)
                };
            })
        );
    }
}
