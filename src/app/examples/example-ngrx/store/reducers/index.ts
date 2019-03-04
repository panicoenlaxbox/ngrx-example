import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromCounter from './counter.reducer';
import { RootState } from 'src/app/core/store/reducers';

export const reducers: ActionReducerMap<ExamplesState> = {
    counter: fromCounter.counterReducer
};

export interface ExamplesState {
    counter: fromCounter.CounterState;
}

export interface ExamplesFeatureState extends RootState {
    examples: ExamplesState;
}

export const getExamplesState = createFeatureSelector<ExamplesFeatureState, ExamplesState>('examples');

export const getCounterState = createSelector(
    getExamplesState,
    (state: ExamplesState) => state.counter
);
