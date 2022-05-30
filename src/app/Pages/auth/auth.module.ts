import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {AuthComponent} from "./auth.component";
import {LoginPage, RegisterPage} from "./contents";


@NgModule({
  declarations: [AuthComponent, LoginPage, RegisterPage],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule { }
