import { Injectable } from '@angular/core';
import { Store } from 'rxjs-observable-store';
import { ExampleState } from './example.state';

@Injectable()
export class ExampleStore extends Store<ExampleState> {

    constructor() {
        super(new ExampleState());
    }

    incrementCounter(): void {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    decrementCounter(): void {
        this.setState({
            counter: this.state.counter - 1
        });
    }
}
