import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KlasseErstellenPageRoutingModule } from './klasse-erstellen-routing.module';

import { KlasseErstellenPage } from './klasse-erstellen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KlasseErstellenPageRoutingModule
  ],
  declarations: [KlasseErstellenPage]
})
export class KlasseErstellenPageModule {}
