import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
    path: 'klassenliste',
    loadChildren: () => import('./klassenliste/klassenliste.module').then( m => m.KlassenlistePageModule)
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
    path: 'klasse-erstellen',
    loadChildren: () => import('./klasse-erstellen/klasse-erstellen.module').then( m => m.KlasseErstellenPageModule)
  },
  {
    path: 'klasse-erstellen',
    loadChildren: () => import('./klasse-erstellen/klasse-erstellen.module').then( m => m.KlasseErstellenPageModule)
  },
  {
    path: 'klassen-tab',
    loadChildren: () => import('./klassen-tab/klassen-tab.module').then( m => m.KlassenTabPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
