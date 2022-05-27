import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import {HomeComponent} from './contents/home/home.component';
import {DashboardComponent} from './contents/dashboard/dashboard.component';
import {UserProfileComponent} from './contents/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {path:'home', component: HomeComponent},
      {path:'dashboard', component: DashboardComponent},
      {path:'user-profile', component: UserProfileComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
