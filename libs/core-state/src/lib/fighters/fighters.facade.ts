import { Injectable } from "@angular/core";
import { Action, ActionsSubject, select, Store } from "@ngrx/store";
import { Fighter } from "@fighter-inventory/api-interfaces";
import { map, filter } from "rxjs/operators";
import * as FightersActions from './fighters.actions';
import * as FightersSelectors from './fighters.selectors';
import * as fromFighters from './fighters.reducer';


@Injectable({
  providedIn: 'root',
})

export class FighterFacade {
  allFighters$ = this.store.pipe(
    map((state) => FightersSelectors.getAllFighters(state)),
  )
  selectedFighters$ = this.store.pipe(select(FightersSelectors.getSelectedFighter));
  loaded$ = this.store.pipe(select(FightersSelectors.getFightersLoaded));

  mutations$ = this.actions$.pipe(
    filter((action: Action) =>
    action.type === FightersActions.createFighter({} as any) .type  ||
    action.type === FightersActions.deleteFighter({} as any) .type  ||
    action.type === FightersActions.updateFighter({} as any) .type  
  ),
  )
  selectFighter(fighterId: string) {
    this.dispatch(FightersActions.selectFighter({ fighterId }))
  }

  loadFighters() {
    this.dispatch(FightersActions.loadFighters());
  }

  loadFighter(fighterId: string) {
    this.dispatch(FightersActions.loadFighter({ fighterId }));
  }

  saveFighter(fighter: Fighter) {
    fighter.id ? this.updateFighter(fighter) : this.createFighter(fighter);
  }

  createFighter(fighter: Fighter) {
    this.dispatch(FightersActions.createFighter({ fighter }));
  }

  updateFighter(fighter: Fighter) {
    this.dispatch(FightersActions.updateFighter({ fighter }));
  }

  deleteFighter(fighter: Fighter) {
    this.dispatch(FightersActions.deleteFighter({ fighter }))
  }

  dispatch(action: Action) {
    this.store.dispatch(action)
  } 

  constructor(
    private store: Store<fromFighters.FighterPartialState>,
    private actions$: ActionsSubject
  ) {}

}