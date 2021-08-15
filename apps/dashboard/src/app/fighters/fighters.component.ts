import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Fighter, emptyFighter } from '@fighter-inventory/api-interfaces';
import { FighterFacade } from '@fighter-inventory/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'fighter-inventory-fighters',
  templateUrl: './fighters.component.html',
  styleUrls: ['./fighters.component.scss']
})
export class FightersComponent implements OnInit {
  allFighters$: Observable<Fighter[]> = this.fighterFacade.allFighters$;
  selectedFighter$: Observable<Fighter> = this.fighterFacade.selectedFighters$;

  form: FormGroup

  constructor(
    private fighterFacade: FighterFacade,
    private formBuilder: FormBuilder
  ) {
    this.fighterFacade.mutations$.subscribe((_) => this.resetFighter());
  }

  ngOnInit() {
    this.initForm();
    this.fighterFacade.loadFighters();
    this.resetFighter();
  };

  selectFighter(fighter: Fighter) {
    this.fighterFacade.selectFighter(fighter.id);
    this.form.patchValue(fighter);
  };

  deleteFighter(fighter: Fighter) {
    this.fighterFacade.deleteFighter(fighter)
  }

  saveFighter(fighter: Fighter) {
    this.fighterFacade.saveFighter(fighter)
  }

  resetFighter() {
    this.form.reset();
    this.selectFighter(emptyFighter);
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      name: [''],
      generation: [''],
      role: [''],
      make: [''],
      users: ['']
    })
  }

}
