import * as fromAppVersion from './app.reducer';
import { environment } from 'src/environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { ActionReducerMap, MetaReducer, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRouter from './router.reducer';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';

export interface RootState {
  appVersion: fromAppVersion.AppVersionState;
  router: RouterReducerState<fromRouter.RouterStateUrl>;
}

export const metaReducers: MetaReducer<RootState>[] = !environment.production
  ? [storeFreeze]
  : [];

export const reducers: ActionReducerMap<RootState> = {
  appVersion: fromAppVersion.appVersionReducer,
  router: routerReducer
};

export const getAppVersionState = createFeatureSelector<fromAppVersion.AppVersionState>('appVersion');

export const getRouterReducerState = createFeatureSelector<RouterReducerState<fromRouter.RouterStateUrl>>('router');

export const getRouterStateUrl = createSelector(
  getRouterReducerState,
  state => state.state
);

export const getAppVersionId = createSelector(
  getAppVersionState,
  state => state.id
);
