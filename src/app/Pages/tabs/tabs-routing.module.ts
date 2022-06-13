import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import {HomeComponent} from './contents/home/home.component';
import {DashboardComponent} from './contents/dashboard/dashboard.component';
import {UserProfileComponent} from './contents/user-profile/user-profile.component';
import {SubGroupPage, UserEditPage} from "../core";

const routes: Routes = [
  {
    path:'',
    redirectTo: 'tabs/home'
  },
  {
    path: 'tabs',
    component: TabsPage,
    children:[
      {path:'home', component: HomeComponent},
      {path:'dashboard', component: DashboardComponent},
      {path:'user-profile', component: UserProfileComponent},
      {path:'EditUser', component: UserEditPage},
      {path: 'Subgroup/:classId/:className', component: SubGroupPage}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
