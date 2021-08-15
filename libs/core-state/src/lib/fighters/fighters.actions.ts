import { createAction, props } from "@ngrx/store";
import { Fighter } from "@fighter-inventory/api-interfaces";

// Select Entity

export const selectFighter = createAction(
    '[FIGHTER] Fighter Selected',
    props<{ fighterId: string;}>()
);

// Load All Entities

export const loadFighters = createAction(
    '[FIGHTER] Load Fighters'
);

export const loadFightersSuccess = createAction(
    '[FIGHTER] Load Fighters Success',
    props<{ fighters: Fighter[] }>()
);

export const loadFightersFailure = createAction(
    '[FIGHTER] Load Fighters Failed',
    props<{ error: any}>()
);

// Load Single Entity

export const loadFighter = createAction(
    '[FIGHTER] Load Fighter',
    props<{ fighterId: string;}>()
);

export const loadFighterSuccess = createAction(
    '[FIGHTER] Load FIghter Success',
    props<{ fighter: Fighter}>()
);

export const loadFighterFailure = createAction(
    '[FIGHTER] Load FIghter Failure',
    props<{ error: any}>()
);

// Load Entity Update

export const updateFighter = createAction(
    '[FIGHTER] Update Fighter',
    props<{ fighter: Fighter}>()
);

export const updateFighterSuccess = createAction(
    '[FIGHTER] Update Fighter Success',
    props<{ fighter: Fighter}>()
);

export const updateFighterFailure = createAction(
    '[FIGHTER] Update Fighter Failed',
    props<{ error: any}>()
);

// Load Entity Delete

export const deleteFighter = createAction(
    '[Fighter] Delete Fighter',
    props<{ fighter: Fighter}>()
);

export const deleteFighterSuccess = createAction(
    '[FIGHTER] Delete Fighter Success',
    props<{ fighter: Fighter}>()
);

export const deleteFighterFailure = createAction(
    '[FIGHTER] Delete Fighter Failed',
    props<{ error: any}>()
);

// Load Entity Create

export const createFighter = createAction(
    '[FIGHTER] Create Fighter',
    props<{ fighter: Fighter }>()
);

export const createFighterSuccess = createAction(
    '[FIGHTER] Create Fighter Success',
    props<{ fighter: Fighter}>()
);

export const createFighterFailure = createAction(
    '[FIGHTER] Create Fighter Failure',
    props<{ error: any}>()
);