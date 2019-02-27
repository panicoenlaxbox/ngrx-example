import { Action } from '@ngrx/store';

export const INCREMENT_COUNTER = '[Counter] Increment';
export const DECREMENT_COUNTER = '[Counter] Decrement';

export class IncrementCounterAction implements Action {
    readonly type = INCREMENT_COUNTER;
    constructor(public payload: number) { }
}

export class DecrementCounterAction implements Action {
    readonly type = DECREMENT_COUNTER;
    constructor(public payload: number) { }
}

export type CounterActions = IncrementCounterAction | DecrementCounterAction;
