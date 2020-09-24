import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { pathToFileURL } from 'url';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('../register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forget',
    loadChildren: () => import('../forget/forget.module').then( m => m.ForgetPageModule)
  },
  {
    path:'transaction',
    loadChildren: () => import('../transactions/transaction.module').then( m => m.TransactionPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('../notfound/notfound.module').then( m => m.NotFoundModule )
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
