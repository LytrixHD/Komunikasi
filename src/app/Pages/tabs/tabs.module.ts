import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import {UserEditPage} from "../core";
import {UserProfileComponent} from "./contents/user-profile/user-profile.component";
import {ChangePWForm, DeleteUserForm} from "../../core/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage, UserProfileComponent, UserEditPage, ChangePWForm, DeleteUserForm]
})
export class TabsPageModule {}
