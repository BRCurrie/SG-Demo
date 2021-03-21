import { routerReducer, RouterReducerState } from "@ngrx/router-store";
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from "@ngrx/store";
import { environment } from "src/environments/environment";

export interface AppState {
  router: RouterReducerState<any>;
  // routerReducer
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
