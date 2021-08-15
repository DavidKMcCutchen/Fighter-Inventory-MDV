import {  createFeatureSelector, createSelector } from "@ngrx/store";
import { emptyFighter } from "@fighter-inventory/api-interfaces";
import { fighterAdapter, FighterState, FIGHTER_FEATURE_KEY } from "./fighters.reducer";

export const getFighterState = createFeatureSelector<FighterState>(FIGHTER_FEATURE_KEY);

const { selectAll, selectEntities } = fighterAdapter.getSelectors();

export const getFightersLoaded = createSelector(
  getFighterState,
  (state: FighterState) => state.loaded
);

export const getFighterError = createSelector(
  getFighterState,
  (state: FighterState) => state.error
);

export const getAllFighters = createSelector(
  getFighterState,
  (state: FighterState) => selectAll(state)
);

export const getFighterEntities = createSelector(
  getFighterState,
  (state: FighterState) => selectEntities(state)
);

export const getSelectedFighterId = createSelector(
  getFighterState,
  (state: FighterState) => state.selectedId
);

export const getSelectedFighter = createSelector(
  getFighterEntities,
  getSelectedFighterId,
  (entities, selectedId) => (selectedId && entities[selectedId]) || emptyFighter
)