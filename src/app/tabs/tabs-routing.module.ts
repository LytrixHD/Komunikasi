import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import {DashboardComponent} from '../dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'tabs' ,
    component: TabsPage,
    children: [
      {
        path: ':userId/home',
        loadChildren: () => import('../home/home.module').then(m => m.Tab1PageModule)
      },
      {
        path: ':userId/user',
        loadChildren: () => import('../user/user.module').then(m => m.UserPageModule)
      },
      {
      path: ':userId/dashboard', component: DashboardComponent
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
