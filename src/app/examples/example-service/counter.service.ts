import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CounterService {
    private subject = new BehaviorSubject<number>(0);

    constructor() { }

    setCounter(value: number) {
        this.subject.next(value);
    }

    getCounter(): Observable<number> {
        return this.subject.asObservable();
    }

    getValue(): number {
        return this.subject.value;
    }
}