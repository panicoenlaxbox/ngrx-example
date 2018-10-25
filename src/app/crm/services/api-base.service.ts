import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponseBase } from '../models/response-base';

export abstract class ApiBaseService<TResponse extends ResponseBase<TItem>, TItem> {
    constructor(private http: HttpClient, private file: string) {
    }

    public get(): Observable<TResponse>;
    public get(first: number, rows: number): Observable<TResponse>;
    public get(first?: number, rows?: number): Observable<TResponse> {
        return this.http.get<TItem[]>(`./assets/${this.file}`).pipe(
            map((value: TItem[]) => {
                return <TResponse>{
                    totalRecords: value.length,
                    data: first === undefined ? value : value.slice(first, first + rows)
                };
            })
        );
    }
}
