import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {AuthComponent} from './auth.component';
import {LoginPage, RegisterPage} from './contents';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';


@NgModule({
  declarations: [AuthComponent, LoginPage, RegisterPage],
  imports: [CommonModule, AuthRoutingModule, FormsModule, IonicModule],
})
export class AuthModule { }
