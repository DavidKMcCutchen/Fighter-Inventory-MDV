import { Fighter } from "@fighter-inventory/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as FighterActions from './fighters.actions'

export const FIGHTER_FEATURE_KEY = 'fighters';

export interface FighterState extends EntityState<Fighter> {
    selectedId?: string | number;
    loaded: boolean;
    error?: string | null;
}

export interface FighterPartialState {
    readonly [FIGHTER_FEATURE_KEY]: FighterState
  };
  
  export const fighterAdapter: EntityAdapter<Fighter> = createEntityAdapter<Fighter>();
  
  export const initialFighterState: FighterState = fighterAdapter.getInitialState(
    {
      loaded: false
    }
  );
  
  const onFailure = (state, {error}): FighterState => ({ ...state, error});
  
  const onDispatch = (state, action): FighterState => ({
    ...state,
    loaded: false,
    error: null
  })
  
  const _fighterReducer = createReducer(
    initialFighterState,
    on(
      FighterActions.loadFighterFailure,
      FighterActions.loadFightersFailure,
      FighterActions.deleteFighterFailure,
      FighterActions.updateFighterFailure,
      FighterActions.createFighterFailure,
      onFailure
    ),
    on(
      FighterActions.loadFighter,
      FighterActions.loadFighters,
      FighterActions.deleteFighter,
      FighterActions.updateFighter,
      FighterActions.createFighter,
      onDispatch
    ),
    on(
      FighterActions.loadFighterSuccess, (state, { fighter}) =>
      fighterAdapter.upsertOne(fighter, { ...state, loaded: true})
    ),
    on(
      FighterActions.selectFighter, (state, { fighterId}) =>({
        ...state,
        selectedId: fighterId
      }) 
    ),
    on(
      FighterActions.loadFightersSuccess, (state, { fighters }) =>
      fighterAdapter.setAll(fighters, {...state, loaded: true})
    ),
    on(
      FighterActions.deleteFighterSuccess, (state, { fighter }) =>
      fighterAdapter.removeOne(fighter.id, {...state, loaded: true})
    ),
    on(
      FighterActions.updateFighterSuccess, (state, { fighter}) =>
      fighterAdapter.updateOne(
        {id: fighter.id, changes: fighter},
        {...state, loaded: true}
      )
    ),
    on(
      FighterActions.createFighterSuccess, (state, { fighter }) =>
      fighterAdapter.addOne(fighter, {...state, loaded: true}) 
    ),
  )
  
    export function fighterReducer(
      state: FighterState | undefined,
      action: Action
    ) {
      return _fighterReducer(state, action)
    }