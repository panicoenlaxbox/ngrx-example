import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromCounter from './counter.reducer';
import { RootState } from 'src/app/core/reducers';

export const reducers: ActionReducerMap<ExamplesState> = {
    counter: fromCounter.counterReducer
};

export interface ExamplesState {
    counter: fromCounter.CounterState;
}

// TODO Mario, siempre se inyecta en un módulo lazy el feature state?
// nunca algo mayor (RootState) ni tampoco menor, siempre Feature State y acceso por selectores?
export interface ExamplesFeatureState extends RootState {
    examples: ExamplesState;
}

export const getExamplesState = createFeatureSelector<ExamplesFeatureState, ExamplesState>('examples');

export const getCounterState = createSelector(
    getExamplesState,
    (state: ExamplesState) => state.counter
);
