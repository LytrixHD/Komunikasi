import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KlassenlistePage } from './klassenliste.page';

const routes: Routes = [
  {
    path: '',
    component: KlassenlistePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KlassenlistePageRoutingModule {}
