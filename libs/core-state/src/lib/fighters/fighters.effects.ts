import { Injectable } from "@angular/core";
import { Fighter } from "@fighter-inventory/api-interfaces";
import { FighterInventoryService } from "@fighter-inventory/core-data";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import * as FighterActions from './fighters.actions';
import { filter, map, tap } from "rxjs/operators";
import { fetch, pessimisticUpdate } from "@nrwl/angular";

@Injectable()
export class FighterEffects {
    loadFighter$= createEffect(() =>
    this.actions$.pipe(
        ofType(FighterActions.loadFighter),
        fetch({
            run: (action) =>
            this.fighterService
                .find(action.fighterId)
                .pipe(
                    map((fighter: Fighter) => FighterActions.loadFighterSuccess({ fighter}))
                ),
            onError: (action, error) => FighterActions.loadFighterFailure({ error })    
        })
    )
    )

    loadFighters$= createEffect(() =>
    this.actions$.pipe(
        ofType(FighterActions.loadFighters),
        fetch({
            run: () =>
                this.fighterService
                    .all()
                    .pipe(
                        map((fighters: Fighter[]) => 
                            FighterActions.loadFightersSuccess({ fighters }))
                    ),
                onError: (action, error) => FighterActions.loadFightersFailure({ error }),    
        })
    ) )

    updateFighter$ = createEffect(() =>
  this.actions$.pipe(
    ofType(FighterActions.updateFighter),
    pessimisticUpdate({
      run: (action) =>
      this.fighterService
      .update(action.fighter)
      .pipe(
        map((fighter: Fighter) => FighterActions.updateFighterSuccess({ fighter })
        )
      ),
    onError: (action, error) => FighterActions.updateFighterFailure({ error })  
    })
  ) )

  deleteFighter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FighterActions.deleteFighter),
      pessimisticUpdate({
        run: (action) =>
        this.fighterService
        .delete(action.fighter)
        .pipe(
          map(() => FighterActions.deleteFighterSuccess({ fighter: action.fighter })
          )
        ),
      onError: (action, error) => FighterActions.deleteFighterFailure({ error })  
      })
    )
    )

    createFighter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FighterActions.createFighter),
      pessimisticUpdate({
        run: (action) =>
        this.fighterService
        .create(action.fighter)
        .pipe(
          map((fighter: Fighter) => FighterActions.createFighterSuccess({ fighter })
          )
        ),
      onError: (action, error) => FighterActions.createFighterFailure({ error })  
      })
    ))
  

constructor(private actions$: Actions, private fighterService: FighterInventoryService) {}
}