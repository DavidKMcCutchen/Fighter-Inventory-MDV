import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Fighter } from '@fighter-inventory/api-interfaces';

@Component({
  selector: 'fighter-inventory-fighter-details',
  templateUrl: './fighter-details.component.html',
  styleUrls: ['./fighter-details.component.scss']
})
export class FighterDetailsComponent {
  currentFighter: Fighter;
  originalTitle: string;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set fighter(value) {
    if (value) this.originalTitle = value.name;
    this.currentFighter = {...value}
  }

  @Input() form: FormGroup;

  save(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  };

  cancel() {
    this.cancelled.emit();
  }

}
