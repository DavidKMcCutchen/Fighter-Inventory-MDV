import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FightersComponent } from './fighters/fighters.component';
import { FighterListComponent } from './fighters/fighter-list/fighter-list.component';
import { FighterDetailsComponent } from './fighters/fighter-details/fighter-details.component';
import { MaterialModule } from '@fighter-inventory/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreDataModule } from '@fighter-inventory/core-data';
import { CoreStateModule } from '@fighter-inventory/core-state';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, FightersComponent, FighterDetailsComponent, FighterListComponent],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    RoutingModule, 
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule, 
    FormsModule, 
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}