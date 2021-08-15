import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Fighter } from '@fighter-inventory/api-interfaces';

@Component({
  selector: 'fighter-inventory-fighter-list',
  templateUrl: './fighter-list.component.html',
  styleUrls: ['./fighter-list.component.scss']
})
export class FighterListComponent {
  @Input() fighters: Fighter[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

}
