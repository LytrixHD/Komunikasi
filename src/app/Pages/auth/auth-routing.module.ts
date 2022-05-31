import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./auth.component";
import {LoginPage, RegisterPage} from "./contents";

const routes: Routes = [
  {
    path: '',
    component:AuthComponent,
    children: [
      {path: 'login', component:LoginPage},
      {path: '', component: LoginPage, pathMatch:'full'},
      {path: 'register', component: RegisterPage, pathMatch:'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
