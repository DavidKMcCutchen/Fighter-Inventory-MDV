import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RootStoreConfig, StoreModule } from '@ngrx/store';
import { CoreDataModule } from '@fighter-inventory/core-data';
import { FighterEffects } from './fighters/fighters.effects';
import { reducers } from '.';
import { NgModule } from '@angular/core';


const store_name = 'Fighters Store';

const storeConfig: RootStoreConfig<any> = {
  runtimeChecks: {
    strictActionImmutability: true,
    strictStateImmutability: true
  }
};

@NgModule({
  imports: [
    CommonModule,
    CoreDataModule,
    StoreModule.forRoot(reducers, storeConfig),
    EffectsModule.forRoot([FighterEffects]),
    StoreDevtoolsModule.instrument({ name: store_name })
  ],
  providers: []
})
export class CoreStateModule {}
