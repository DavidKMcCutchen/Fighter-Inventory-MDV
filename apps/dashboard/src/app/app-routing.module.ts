import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from "@angular/router";
import { FightersComponent } from './fighters/fighters.component';
import { FighterInventoryService } from "@fighter-inventory/core-data";
import { LoginComponent } from "@fighter-inventory/ui-login";

const routes: Route[] = [
  {path: '', component: LoginComponent},
  {path: 'fighters', component: FightersComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
