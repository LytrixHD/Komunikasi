import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {KlassenDetailsComponent} from './klassen-details/klassen-details.component';
import {FachDetailsComponent} from './fach-details/fach-details.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'startPage',
    loadChildren: () => import('./startPage/startPage.module').then(m => m.HomePageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.Tab1PageModule)
  },
  { path: 'register', component: RegisterComponent},
  { path: 'klassenDetails/:klassenId', component: KlassenDetailsComponent},
  { path: 'fachDetails/:klassenId/:fachId', component: FachDetailsComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
