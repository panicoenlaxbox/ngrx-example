import * as fromAppVersion from './app.reducer';
import { environment } from 'src/environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

export interface RootState {
    appVersion: fromAppVersion.AppVersionState;
}

export const metaReducers: MetaReducer<RootState>[] = !environment.production
    ? [storeFreeze]
    : [];

export const reducers: ActionReducerMap<RootState> = {
    appVersion: fromAppVersion.appVersionReducer
};
