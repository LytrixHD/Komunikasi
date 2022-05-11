import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import {DashboardComponent} from '../dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'tabs/:userId ' ,
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'user',
        loadChildren: () => import('../user/user.module').then(m => m.UserPageModule)
      },
      {
      path: 'dashboard', component: DashboardComponent
      },
      {
        path: '',
        redirectTo: '/startpage',
        pathMatch: 'full'
      }
    ]
  },

  {
    path: '',
    redirectTo: '/startPage',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
