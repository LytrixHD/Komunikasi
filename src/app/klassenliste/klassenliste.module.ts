import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KlassenlistePageRoutingModule } from './klassenliste-routing.module';

import { KlassenlistePage } from './klassenliste.page';
import {KlasseComponent} from '../klasse/klasse.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KlassenlistePageRoutingModule
  ],
    declarations: [KlassenlistePage, KlasseComponent]
})
export class KlassenlistePageModule {}
