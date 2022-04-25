import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KlasseErstellenPage } from './klasse-erstellen.page';

const routes: Routes = [
  {
    path: '',
    component: KlasseErstellenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KlasseErstellenPageRoutingModule {}
