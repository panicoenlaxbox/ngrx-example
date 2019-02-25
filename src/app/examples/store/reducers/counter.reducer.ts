import * as fromCounter from '../actions/counter.actions';

export interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0
};

export function counterReducer(state = initialState, action: fromCounter.CounterActions): CounterState {
    switch (action.type) {
        case fromCounter.INCREMENT_COUNTER:
            return {
                value: action.payload
            };
        case fromCounter.DECREMENT_COUNTER:
            return {
                value: action.payload
            };
        default:
            return state;
    }
}
