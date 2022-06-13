import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import {SubGroupPage, UserEditPage} from "../core";
import {UserProfileComponent} from "./contents/user-profile/user-profile.component";
import {ChangePWForm, ClassesForm, DeleteUserForm} from "../../core/forms";
import {DashboardComponent} from "./contents/dashboard/dashboard.component";
import {HomeComponent} from "./contents/home/home.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule
  ],
  // eslint-disable-next-line max-len
  declarations: [HomeComponent, SubGroupPage, TabsPage, UserProfileComponent, DashboardComponent, UserEditPage, ChangePWForm, DeleteUserForm, ClassesForm]
})
export class TabsPageModule {}
