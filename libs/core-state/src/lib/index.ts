import { ActionReducerMap } from "@ngrx/store";
import * as fromFighters from './fighters/fighters.reducer';

export interface AppState {
  [fromFighters.FIGHTER_FEATURE_KEY]: fromFighters.FighterState
}

export const reducers: ActionReducerMap<AppState> = {
  [fromFighters.FIGHTER_FEATURE_KEY]: fromFighters.fighterReducer
}