import * as fromAppVersion from './app.reducer';
import { environment } from 'src/environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

export interface State {
    appVersion: fromAppVersion.AppVersionState;
}

export const metaReducers: MetaReducer<State>[] = !environment.production
    ? [storeFreeze]
    : [];

export const reducers: ActionReducerMap<State> = {
    appVersion: fromAppVersion.appVersionReducer
};
