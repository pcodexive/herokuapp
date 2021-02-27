import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/authgard.service';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./main/main.model').then(m => m.MainModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.model').then(m => m.LoginModule)
  },
   {
    path: 'register',
    loadChildren: () => import('./register/register.model').then(m => m.RegisterModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
