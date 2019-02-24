import { Params, RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';
import { Injectable } from '@angular/core';
import { RootState } from '.';

export interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

export function getInitialRouterReducerState(): Partial<RootState> {
  return {
    router: {
      state: {
        url: null,
        params: {},
        queryParams: {}
      },
      navigationId: 0
    }
  };
}

@Injectable()
export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: { queryParams }
    } = routerState;
    const { params } = route;

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return { url, params, queryParams };
  }
}
