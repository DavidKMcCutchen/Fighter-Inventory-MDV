import { Component } from '@angular/core';


@Component({
  selector: 'fighter-inventory-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title= 'Fighters';
  links= [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'fighters', icon: 'view_list', title: 'Fighters'}

  ]
}
